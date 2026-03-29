import styled from "styled-components";
import { useState } from "react";

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 1.5rem;

  label {
  }

  input {
    width: 100%;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled.button`
  background-color: #1f6feb;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  min-width: 5rem;
`;

const AddIngredient = (props: { addIngredient: (ingredient: string) => void; ingredient: string; setIngredient: (ingredient: string) => void }) => {
  console.log("AddIngredient rendered");
  const [ingredient, setIngredient] = useState<string>("");
  const { addIngredient } = props;

  return (
    <form className="">
      <StyledFieldset>
        <label>Add ingredient</label>
        <input
          type="text"
          value={ingredient}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIngredient(e.target.value)}
        />
      </StyledFieldset>
      <StyledButtonContainer>
        <StyledButton
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            if (!ingredient) return;
            addIngredient(ingredient);
            setIngredient("");
          }}
        >
          Add
        </StyledButton>
      </StyledButtonContainer>
    </form>
  );
};

export default AddIngredient;
