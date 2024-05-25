import React, { useEffect, useState } from "react";
import useAddBankInfo from "../../../hooks/account/useAddBankInfo";

const CreditCardForm = () => {
  const { addBankInfo, success, error } = useAddBankInfo();
  const [state, setState] = useState({
    iban: "",
    bankName: "",
    fullName: "",
    swiftCode: "",
  });
  useEffect(() => {
    success &&
      setState({ iban: "", bankName: "", fullName: "", swiftCode: "" });
  }, [success]);
  const handleInputChange = (e) => {
    const { bankName, value } = e.target;
    setState((prev) => ({ ...prev, [bankName]: value }));
  };

  const handleInputFocus = (e) => {
    setState((prev) => ({ ...prev, focus: e.target.bankName }));
  };

  const token = localStorage.getItem("authToken");

  const handleSubmitForm = (e) => {
    e.preventDefault(); // This prevents the form from reloading the page
    addBankInfo(state, token);
  };

  return (
    <div className="flex col-12">
      <div className="mt-3 col-12">
        <form className="col-12" onSubmit={handleSubmitForm}>
          <div className="mb-3">
            <input
              type="text"
              name="iban"
              className="form-control"
              placeholder="IBAN"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="bankName"
              className="form-control"
              placeholder="Bank Name"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="fullName"
              className="form-control"
              placeholder="Full Name"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="swiftCode"
              className="form-control"
              placeholder="Swift Code"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>

          <div className="d-grid">
            <button className="btn btn-dark">Confirm</button>
          </div>
        </form>
        {error}
        {success && "Payment Information Added"}
      </div>
    </div>
  );
};

export default CreditCardForm;
