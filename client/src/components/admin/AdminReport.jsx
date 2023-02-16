import React from "react";

const AdminReport = () => {
	return (
		<>
			<div className="h-full w-full overflow-hidden bg-slate-200">
				<div className="p-4 w-full bg-theme flex flex-col gap-4 items-center justify-center">
					<p className="text-xl font-bold text-white">S.T.P. Report</p>
					<form className="md:flex md:justify-center gap-4 flex-wrap">
						<label className="label-theme">
							S.T.P. Name{" "}
							<select className="input-theme" name="" id="">
								<option value="">Choose S.T.P.</option>
								<option value="	Bhairoba"> Bhairoba</option>
								<option value="Erandwane"> Erandwane</option>
								<option value="Tanajiwadi"> Tanajiwadi</option>
								<option value="	Bopodi"> Bopodi</option>
								<option value="Naidu (old)"> Naidu (old)</option>
								<option value="Naidu (new)"> Naidu (new)</option>
								<option value="Mundhwa">Mundhwa</option>
								<option value="	Vitthalwadi"> Vitthalwadi</option>
								<option value="Baner"> Baner</option>
								<option value="	Kharadi"> Kharadi</option>
							</select>
						</label>

						<label className="label-theme">
							From Date <input className="input-theme" type="date" />
						</label>
						<label className="label-theme">
							To Date <input className="input-theme" type="date" />
						</label>
						<button
							type="submit"
							className="h-8  px-2 bg-cyan-900 text-white rounded mt-6 text-xl"
						>
							Search
						</button>
					</form>
				</div>
				<div className="h-full w-full">
					<p className="font-bold text-cyan-700 text-center">No Report Found</p>
				</div>
			</div>
		</>
	);
};

export default AdminReport;
