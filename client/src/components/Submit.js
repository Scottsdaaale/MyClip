import React from "react";

function Submit() {
  return (
    <div className="form-box">
      <form>
        <div className="field1">
          <input placeholder="GYG URL" />
        </div>
        <br></br><br></br>
        <center>
          <button type="submit" id="submitBtn" className="submitBtn">
          submit
          </button>
        </center>
      </form>
    </div>
  );
}

export default Submit;
