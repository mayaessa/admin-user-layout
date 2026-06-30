import "../styles/buttons.css";

function ColorButtons({ setBgColor }) {

  return (

    <div className="color-buttons">

      <button
        className="green"
        onClick={() => setBgColor("#0fbd72")}
      />

      <button
        className="blue"
        onClick={() => setBgColor("#5aa8ed")}
      />
      <button
        className="pink"
        onClick={() => setBgColor("#f269a9")}
      />

      <button
        className="black"
        onClick={() => setBgColor("#454547")}
      />
      <button
        className="white"
        onClick={() => setBgColor("#f7f7f9")}
      />

    </div>

  );

}

export default ColorButtons;