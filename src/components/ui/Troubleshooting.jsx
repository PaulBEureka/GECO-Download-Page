import React from "react";

const troubleshootingData = [
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-7 w-7 text-blue-500"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
				/>
			</svg>
		),
		title: "App not installing",
		desc: "Ensure your device is running Android 6.0 (API 22) or higher and that installation from unknown sources is enabled in your device settings.",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-7 w-7 text-green-500"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
				/>
			</svg>
		),
		title: "Features not working",
		desc: "Check your internet connection. Most features require an active connection to the Gemini LLM API.",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-7 w-7 text-yellow-500"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9 17v-2a4 4 0 018 0v2m-4-4V7a4 4 0 10-8 0v6m4 4v2a2 2 0 104 0v-2"
				/>
			</svg>
		),
		title: "Monitoring not updating",
		desc: "Make sure the app has the necessary permissions and is allowed to run in the background.",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-7 w-7 text-purple-500"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 4v16m8-8H4"
				/>
			</svg>
		),
		title: "Dark mode not toggling",
		desc: "Try restarting the app. If the issue persists, clear the app cache or reinstall.",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-7 w-7 text-red-500"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M18.364 5.636l-1.414 1.414A9 9 0 105.636 18.364l1.414-1.414A7 7 0 1116.95 7.05z"
				/>
			</svg>
		),
		title: "Other issues",
		desc: "Refer to the user manual or contact support for further assistance.",
	},
];

const Troubleshooting = () => (
	<div className="max-w-2xl w-full flex flex-col gap-6">
		<h2 className="text-3xl font-semibold mb-4 text-start flex items-center gap-2">
			<span className="inline-block text-red-500">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
					/>
				</svg>
			</span>
			Troubleshooting
		</h2>
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-yellow-50 dark:bg-gray-800 p-4 rounded-xl">
			{troubleshootingData.map((item, idx) => (
				<div
					key={idx}
					className="flex items-start gap-3 bg-white dark:bg-gray-900 rounded-lg p-4 shadow border border-yellow-100 dark:border-gray-700"
				>
					{item.icon}
					<div className="text-start">
						<p className="font-semibold text-gray-900 dark:text-gray-100">
							{item.title}
						</p>
						<p className="text-gray-700 dark:text-gray-200 text-sm">
							{item.desc}
						</p>
					</div>
				</div>
			))}
		</div>
	</div>
);

export default Troubleshooting;
