import React from "react";
import { FormState, FormErrors } from "./Login";
import { InputComp } from "./Input";


type LoginFormProps = {
  formData: FormState;
  formErrors: FormErrors;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({
  formData,
  formErrors,
  handleInputChange,
  handleCheckboxChange,
  handleSubmit,
}) => {
  return (
    <form data-testid="form" onSubmit={handleSubmit} className="login-form">
      <div className="group12">
        <div className="rectangle6">
          <InputComp
            Id="uname"
            InputPlaceholder="Username"
            InputName="uname"
            value={formData.uname}
            onChangeA={handleInputChange}
            InputClassName="txtinput"
            autoComplete="on"
          />
          {formErrors.uname && <div className="error_message">{formErrors.uname}</div>}
        </div>
        <div className="rectangle7">
          <InputComp
            Id="pass"
            InputName="pass"
            InputType="password"
            InputPlaceholder="Password"
            value={formData.pass}
            onChangeA={handleInputChange}
            InputClassName="txtinput"
            autoComplete="on"
          />
          {formErrors.pass && <div className="error_message">{formErrors.pass}</div>}
        </div>
      </div>
      <div className="checks">
        <div className="check-icon">
          <InputComp
            Id="checkbox"
            InputClassName="rectangle306"
            InputName="checkbox"
            InputType="checkbox"
            checked={formData.rememberme}
            onChangeA={handleCheckboxChange}
          />
        </div>
        <div className="label">Remember me</div>
      </div>
      <div className="group3">
        <div className="rectangle8">
          <button type="submit" className="login-now">
            Login Now
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
