import { useContext } from "react";
import TreeContext from "./TreeContext";

function Message() {
  const { message } = useContext(TreeContext);

  if (null === message) {
    return null;
  }

  return (
    <div className="show-message">
      <div class="alert alert-success" role="alert">
        A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
      </div>
    </div>
  );
}

export default Message;