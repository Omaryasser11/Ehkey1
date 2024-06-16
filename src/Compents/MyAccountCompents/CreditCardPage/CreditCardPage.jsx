import React, { useEffect, useState } from "react";
import useAddBankInfo from "../../../hooks/account/useAddBankInfo";
import useGetBankInfo from "../../../hooks/account/useGetBankInfo";
import useUpdateBankInfo from "../../../hooks/account/useUpdateBankInfo";
import "./CreditCardPage.scss"
import {Swal} from "sweetalert2";
const CreditCardForm = () => {
  const { addBankInfo, success, error } = useAddBankInfo();
  const { getBankInfo, code, setCode, data } = useGetBankInfo();
  const { updateBankInfo } = useUpdateBankInfo();
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
  useEffect(() => {
    getBankInfo(token);
  }, []);
  useEffect(() => {
    // console.log("data", data);
    data && setState(data);
  }, [data]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (e) => {
    setState((prev) => ({ ...prev, focus: e.target.name }));
  };

  const token = localStorage.getItem("authToken");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (code === 404) addBankInfo(state, token);
    else updateBankInfo(state, token);
    {
      setCode(200);
      Swal.fire({
        title: "Sucess Jop!",
        text: "Your Bank Info Updated Sucessfully",
        icon: "success"
      });
    }

  };

  return (
    <div className="flex col-12">
      <div className="mt-3  col-12">
        <form className="col-12" onSubmit={handleSubmitForm}>
          <div className="mb-3 flexR">
            <label className="col-2">Iban</label>
            <input
              type="text"
              name="iban"
              className="form-control col-10"
              placeholder="IBAN"
              value={state.iban}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>

          <div className="mb-3 flexR">
            <label className="col-2">Bank Name</label>
            <input

              type="text"
              name="bankName"
              className="form-control col-10"
              placeholder="Bank Name"
              value={state.bankName}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>

          <div className="mb-3 flexR">
            <label className="col-2">Full Name </label>
            <input
              type="text"
              name="fullName"
              className="form-control col-10"
              placeholder="Full Name"
              value={state.fullName}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>

          <div className="mb-3 flexR">
            <label className="col-2">Swift Code</label>
            <input
              type="text"
              name="swiftCode"
              className="form-control col-10"
              placeholder="Swift Code"
              value={state.swiftCode}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>

          <div className="d-grid">
            <button className="btn">
              {code === 404 ? "Save" : "Update"}
            </button>
          </div>
        </form>
        {error}
        {success && "Payment Information Added"}
      </div>
    </div>
  );
};

export default CreditCardForm;
