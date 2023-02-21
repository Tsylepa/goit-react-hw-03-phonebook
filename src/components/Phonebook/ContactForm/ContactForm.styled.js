import styled from 'styled-components';
import { Form, Field } from 'formik';

export const AddContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 250px;
`;

export const Input = styled(Field)`
  display: block;
  padding: 6px 10px;
  font-size: 18px;
  border-radius: 4px;
  border: 2px solid var(--button);
`;

export const ErrorText = styled.p`
  position: absolute;
  margin: 0;
  font-size: 14px;
  color: var(--error);

  ::first-letter {
    text-transform: capitalize;
  }
`;

export const Button = styled.button`
  display: block;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  background: var(--button);
  transition: opacity var(--transition-function),
    color var(--transition-function);
  cursor: pointer;

  &:not(:disabled) {
    background: var(--button-add);
    color: var(--contrast-color);
    opacity: 0.6;
  }

  &:not(:disabled):hover {
    opacity: 1;
  }
`;
