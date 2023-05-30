import { useRef, useState } from "react";
import "./UserNameForm.css";

const UserNameForm = ({ onSendName }) => {
  const [userNameValue, setUserNameValue] = useState("");
  const [nameError, setNameError] = useState("");
  const hasInputAlreadyTouched = useRef(false);

  const handleChange = (e) => {
    const nameValue = e.target.value;
    if (!hasInputAlreadyTouched.current) hasInputAlreadyTouched.current = true;

    if (!nameValue) setNameError("El nombre está vacío!");
    else if (/[^a-z ]/i.test(nameValue))
      setNameError("Solo se permiten letras y espacios.");
    else if (!/^[a-z ]{2,} ?$/i.test(nameValue))
      setNameError("El nombre debe tener mínimo dos letras");
    else setNameError("");

    setUserNameValue(nameValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameError && hasInputAlreadyTouched.current) onSendName(userNameValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Boolean(nameError) && <p>{nameError}</p>}
      <input
        type="text"
        placeholder="Tu nombre... "
        value={userNameValue}
        onChange={handleChange}
      />
      <button type="submit"><img src="https://i.pinimg.com/736x/75/b0/72/75b0728c429ced949eb0e9287f7c9a95.jpg" alt="comenzar" /></button>
    </form>
  );
};

export default UserNameForm;
