import { useState } from 'react';
import { evaluate } from 'mathjs';
import Button from "./Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const col1 = "(7410";
const col2 = ")852.";
const col3 = "963";
const col4 = "/*-+"

function App() {
	const [disp, setDisp] = useState("");
	const [err, setError] = useState(false);

	const handleButtonClick = (e) => {
		if(err) {
			setError(false);
		}
		setDisp(disp + e.target.innerText);
	}

	const clearOne = () => {
		if(err) {
			setError(false);
		}
		setDisp(disp.slice(0, -1));
	}

	const clearAll = () => {
		if(err) {
			setError(false);
		}
		setDisp("");
	}

	const evalInputString = () => {
		try {
			const res = evaluate(disp);
			setDisp(res);
		} catch (mathErr) {
			setError(true);
			setDisp("");
		}
	}

  return (
    <div className="d-flex vh-100 align-items-center justify-content-center">
      <div className="card rounded-5 fs-4 overflow-hidden">
				<textarea className="p-4 text-white text-end" cols="12" rows="4" readOnly={true} 
				value={err ? "Math Error" : disp}>
				</textarea>
				<div className="px-3 py-4 bg-dark d-flex">
					<div className="d-flex flex-column flex-grow-1">
						{ col1.split("").map(char => <Button key={char} val={char} callback={handleButtonClick} />) }
					</div>
					<div className="d-flex flex-column flex-grow-1">
						{ col2.split("").map(char => <Button key={char} val={char} callback={handleButtonClick} />) }
					</div>
					<div className="d-flex flex-column flex-grow-1">
						<Button val="AC" callback={clearAll} />
						{ col3.split("").map(char => <Button key={char} val={char} callback={handleButtonClick} />) }
						<Button val="=" callback={evalInputString} />
					</div>
					<div className="d-flex flex-column flex-grow-1">
						<Button val="C" callback={clearOne} />
						{ col4.split("").map(char => <Button key={char} val={char} callback={handleButtonClick} />) }
					</div>
				</div>
			</div>
    </div>
  );
}

export default App;
