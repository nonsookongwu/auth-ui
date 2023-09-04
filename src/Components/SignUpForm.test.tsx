import SignUpForm from "./SignUpForm";
import { render, screen, waitFor } from "@testing-library/react";
import { jest } from "@jest/globals";
import user from "@testing-library/user-event";

describe("input fields are found in the document", () => {
  
  test("renders the form Title", () => {
    const mockOnSubmit = jest.fn();
    render(<SignUpForm onSubmit={mockOnSubmit} />);
    const linkElement = screen.getByText(/Sign up to/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders First name input", () => {
    const mockOnSubmit = jest.fn();
    render(<SignUpForm onSubmit={mockOnSubmit} />);
    const firstNameInput = screen.getByLabelText(/First Name/i);
    expect(firstNameInput).toBeInTheDocument();
  });

  test("renders last name input", () => {
    const mockOnSubmit = jest.fn();
    render(<SignUpForm onSubmit={mockOnSubmit} />);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    expect(lastNameInput).toBeInTheDocument();
  });

  test("renders email", () => {
    const mockOnSubmit = jest.fn();
    render(<SignUpForm onSubmit={mockOnSubmit} />);
    const emailInput = screen.getByLabelText("E-mail");
    expect(emailInput).toBeInTheDocument();
  });

  test("renders company name", () => {
    const mockOnSubmit = jest.fn();
    render(<SignUpForm onSubmit={mockOnSubmit} />);
    const companyNameInput = screen.getByLabelText("Company name");
    expect(companyNameInput).toBeInTheDocument();
  });

  test("renders country", () => {
    const mockOnSubmit = jest.fn();
    render(<SignUpForm onSubmit={mockOnSubmit} />);
    const countryInput = screen.getByRole("combobox", {
      name: /country/i,
    });
    expect(countryInput).toBeInTheDocument();
  });

  test("renders phone", () => {
    const mockOnSubmit = jest.fn();
    render(<SignUpForm onSubmit={mockOnSubmit} />);
    const phoneInput = screen.getByRole("textbox", {
      name: /phone/i,
    });
    expect(phoneInput).toBeInTheDocument();
  });


  test("renders time zone", () => {
    const mockOnSubmit = jest.fn();
    render(<SignUpForm onSubmit={mockOnSubmit} />);
    const timeZoneInput = screen.getByRole("combobox", {
      name: /time zone/i,
    });
    expect(timeZoneInput).toBeInTheDocument();
  });

  test("renders login button", () => {
    const mockOnSubmit = jest.fn();
    render(<SignUpForm onSubmit={mockOnSubmit} />);
    const signupbutton = screen.getByRole("button", { name: "Sign up" });
    expect(signupbutton).toBeInTheDocument();
  });

  test("renders buttons", () => {
    const mockOnSubmit = jest.fn();
    render(<SignUpForm onSubmit={mockOnSubmit} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(4);
  });

  test("renders sign up Button", () => {
    const mockOnSubmit = jest.fn();
    render(<SignUpForm onSubmit={mockOnSubmit} />);
    const button = screen.getByTestId("signupButton");
    expect(button).toBeInTheDocument();
  });

  test("renders a form element", () => {
    const mockOnSubmit = jest.fn();
    render(<SignUpForm onSubmit={mockOnSubmit} />);
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
})



describe("should be able to type in the input", () => {
  
test("should be able to type in the first name input", () => {
  const mockOnSubmit = jest.fn();
  render(<SignUpForm onSubmit={mockOnSubmit} />);
  const firstNameInput = screen.getByPlaceholderText("First name here");
  user.type(firstNameInput, "chukwunonso");
});

  
test("should be able to type in the Last name input", () => {
  const mockOnSubmit = jest.fn();
  render(<SignUpForm onSubmit={mockOnSubmit} />);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  user.type(lastNameInput, "Okongwu");
});

  test("should be able to type in the email input", () => {
    const mockOnSubmit = jest.fn();
    render(<SignUpForm onSubmit={mockOnSubmit} />);
    const emailInput = screen.getByRole("textbox", {
      name: /e\-mail/i,
    });
    user.type(emailInput, "test@gmail.com");
  });

  test("should be able to type in the company name input", () => {
    const mockOnSubmit = jest.fn();
    render(<SignUpForm onSubmit={mockOnSubmit} />);
    const companyNameInput = screen.getByLabelText("Company name");
    user.type(companyNameInput, "test company");
  });
})




describe("That submit button is called",()=>{

test("calls the submit", async () => {
  const mockOnSubmit = jest.fn();
  render(<SignUpForm onSubmit={mockOnSubmit} />);

  const firstNameInput = screen.getByLabelText(/First Name/i);
  user.type(firstNameInput, "chukwunonso");

  const lastNameInput = screen.getByLabelText(/Last Name/i);
  user.type(lastNameInput, "Okongwu");

   const emailInput = screen.getByRole("textbox", {name: /e\-mail/i,});
  user.type(emailInput, "test@gmail.com");
  
  const companyNameInput = screen.getByLabelText("Company name");
  user.type(companyNameInput, "test company");

  user.click(screen.getByRole("button", {name: /sign up/i, }));

  await waitFor(() => {
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  })
  
});

})


