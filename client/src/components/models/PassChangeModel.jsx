import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const PassChangeModel = ({ onClose, user }) => {
	return (
		<>
			<div className="model-theme">
				<div className="bg-theme rounded p-8 relative">
					<button onClick={onClose} className="absolute right-2 top-2">
						<AiFillCloseCircle className="text-sky-200 text-2xl hover:text-red-600 hover:scale-110 " />
					</button>
					<p className="text-center text-white font-bold text-xl mb-2 ">
						Change Password
					</p>
					<label className="label-theme" htmlFor="">
						Old Password
						<input
							// ref={}
							className="input-theme"
							type="password"
							// onChange={(e) => setOldPassword(e.target.value)}
							// value={oldPassword}
							// onKeyUp={(e) => {
							// 	if (e.keyCode === 13) {
							// 		newPasswordRef.current.focus();
							// 	}
							// }}
						/>
					</label>
					<label className="label-theme" htmlFor="">
						New Password
						<input
							className="input-theme"
							// ref={newPasswordRef}
							type="password"
							// onChange={(e) => setNewPassword(e.target.value)}
							// value={newPassword}
							// onKeyUp={(e) => {
							// 	if (e.keyCode === 13) {
							// 		confirmPasswordRef.current.focus();
							// 	}
							// }}
						/>
					</label>
					<label className="label-theme" htmlFor="">
						Confirm Password
						<input
							className="input-theme"
							// ref={confirmPasswordRef}
							type="password"
							// onChange={(e) => setConfirmPassword(e.target.value)}
							// value={confirmPassword}
							// onKeyUp={(e) => {
							// 	if (e.keyCode === 13) {
							// 		updateRef.current.focus();
							// 	}
							// }}
						/>
					</label>
					<button
						// ref={updateRef}
						className="py-1 px-2 mt-4 rounded bg-cyan-800 text-white"
						// onClick={UpdatePassword}
					>
						Update
					</button>
				</div>
			</div>
		</>
	);
};

export default PassChangeModel;
