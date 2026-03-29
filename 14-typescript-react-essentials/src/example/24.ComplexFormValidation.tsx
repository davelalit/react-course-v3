import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// 1. Define the validation schema with Zod
const formSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  profile: z.object({
    bio: z.string().max(200, "Bio too long"),
    website: z.string().url().optional().or(z.literal("")),
  }),
});

// 2. Extract the TypeScript type from the schema
type FormData = z.infer<typeof formSchema>;

export const ComplexForm = () => {
  // 3. Initialize the form with the Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur", // Performance: only validate when user leaves field
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input {...register("username")} />
        {errors.username && <span>{errors.username.message}</span>}
      </div>

      <div>
        <label>Bio (Nested Field)</label>
        <textarea {...register("profile.bio")} />
        {errors.profile?.bio && <span>{errors.profile.bio.message}</span>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Submit"}
      </button>
    </form>
  );
};
