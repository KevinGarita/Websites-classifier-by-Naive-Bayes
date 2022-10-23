import React, { useState } from "react";

export const FormComponent = () => {
  const [link, setLink] = useState("");

  const onChange = ({ target }) => {
    setLink(target.value);
  };

  return (
    <form >
            <div className="type_link">
                <div className="input_link_write ">
                    <input
                        type="text"
                        className="write_link "
                        placeholder="Link... "
                        value={ link }
                        onChange={ onChange }
                    />
                </div>
                <div className="text-center ">
                    <button className="link_send_btn " type="submit">
                        Send
                    </button>
                </div>
            </div>
        </form>
  );
};
