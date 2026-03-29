import axios, { AxiosRequestConfig, CancelTokenSource, AxiosInstance } from "axios";

const axiosParams: AxiosRequestConfig = {
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/",
};

const axiosInstance = axios.create(axiosParams);

export const didAbort = (error: unknown): { aborted: boolean } | undefined => 
  axios.isCancel(error) ? { aborted: true } : undefined;

const getCancelSource = (): CancelTokenSource => axios.CancelToken.source();

export const isApiError = (error: unknown): boolean => 
  axios.isAxiosError(error);

const withAbort = (fn: (...args: any[]) => Promise<any>) => {
  const executor = async (...args: any[]): Promise<any> => {
    const originalConfig: Record<string, any> = args[args.length - 1];
    const { abort, ...config } = originalConfig;

    if (typeof abort === "function") {
      const { cancel, token } = getCancelSource();
      config.cancelToken = token;
      abort(cancel);
    }

    try {
      if (args.length > 2) {
        const [url, body] = args as [string, any];
        return await fn(url, body, config);
      } else {
        const [url] = args as [string];
        return await fn(url, config);
      }
    } catch (error) {
      console.log("api error", error);

      if (didAbort(error)) {
        (error as any).aborted = true;
      }

      throw error;
    }
  };

  return executor;
};

const api = (axiosInstance: AxiosInstance) => {
  return {
    get: (url: string, config?: Record<string, any>) => withAbort(axiosInstance.get)(url, config),
    delete: (url: string, config?: Record<string, any>) => withAbort(axiosInstance.delete)(url, config),
    post: (url: string, body: any, config?: Record<string, any>) => withAbort(axiosInstance.post)(url, body, config),
    patch: (url: string, body: any, config?: Record<string, any>) =>
      withAbort(axiosInstance.patch)(url, body, config),
    put: (url: string, body: any, config?: Record<string, any>) => withAbort(axiosInstance.put)(url, body, config),
  };
};

export default api(axiosInstance);