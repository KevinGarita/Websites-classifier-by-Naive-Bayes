import React, { useState } from "react";

export const FormComponent = () => {
  const [link, setLink] = useState("");

  const onChange = ({ target }) => {
    setLink(target.value);
  };

  return (
    <form className="form-first">
            <div className="flex-container">
                <div className="input_link_write ">
                    <input
                        type="text"
                        className="write_link "
                        placeholder="Link... "
                        value={ link }
                        onChange={ onChange }
                    />
                </div>
                <div  >
                    <button className="btn-1" type="submit">
                        Send
                    </button>
                </div>
            </div>
    </form>
  );
};
