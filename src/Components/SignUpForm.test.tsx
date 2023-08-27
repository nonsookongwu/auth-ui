import react from "react"
import SignUpForm from "./SignUpForm";
import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { jest } from "@jest/globals";

describe("sign up", () => {
    const mockOnSubmit = jest.fn();
    describe("with valid inputs", () => {
        it("calls the onSubmit function", async() => {
            
            const { getByLabelText, getByRole } = render(
              <SignUpForm onSubmit={mockOnSubmit} />
            );

             await act( async() => {
              fireEvent.change(getByLabelText("First Name"), {
                target: { value: "Chukwunonso" },
              });
                
            fireEvent.change(getByLabelText("Last Name"), {
              target: { value: "Okongwu" },
            });
                fireEvent.change(getByLabelText("E-mail"), {
                  target: { value: "email@test.com" },
                });
                fireEvent.change(getByLabelText("Company name"), {
                  target: { value: "ABC company" },
                });
            });

             await act( async() => {
                fireEvent.click(getByRole("button"))
            })

            expect(mockOnSubmit).toHaveBeenCalled()

        })
    })

    describe("with invalid first name", () => {
      it("renders first name validation error", async() => {
        const { getByLabelText, container } = render(<SignUpForm onSubmit={mockOnSubmit} />);

        await act(async () => {
          const firstNameInput = getByLabelText("First Name *")
          fireEvent.change(firstNameInput, {target:{value: ""}})
        })

        expect(container.innerHTML).toMatch("First name cannot be empty");
        });
    });

    describe("with invalid last name", () => {
      it("renders the last name validation error", async() => {
        const { getByLabelText, container } = render(<SignUpForm onSubmit={mockOnSubmit} />);

        await act(async () => {
          const lastNameInput = getByLabelText("Last Name *")
          fireEvent.change(lastNameInput, {target:{value: ""}})
        })

        expect(container.innerHTML).toMatch("Last name cannot be empty");

        })

    });

    describe("with invalid email", () => { 
      it("renders an email validation error message", async() => {
          const { getByLabelText, container } = render(
            <SignUpForm onSubmit={mockOnSubmit} />
          );
        
        await act(async () => {
          const emailInput = getByLabelText("E-mail *");
          fireEvent.change(emailInput, { target: { value: "" } });
        });

        expect(container.innerHTML).toMatch("email cannot be empty");
        
        })
    });
    
    describe("with invalid company name", () => {
      it("renders the company name validation message", async() => {
          const { getByLabelText, container } = render(
            <SignUpForm onSubmit={mockOnSubmit} />
          );
        
        await act(async () => {
          const companyNameInput = getByLabelText("E-mail *");
          fireEvent.change(companyNameInput, { target: { value: "" } });
        });

        expect(container.innerHTML).toMatch("Company name cannot be empty");
        })
    });
})