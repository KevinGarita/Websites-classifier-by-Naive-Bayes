import React, { useState } from "react";

export const FormComponent = ({onSearchLink}) => {
  
  const [link, setLink] = useState("");

  const onChange = ({ target }) => {
    setLink(target.value);
  };

  return (
    <div className="form-first">
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
                    <button className="btn-1" onClick={ ()=> onSearchLink(link) }>
                        Send
                    </button>
                </div>
            </div>
    </div>
  );
};
