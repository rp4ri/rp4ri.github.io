export const getFormattedDate = (date: Date | string | undefined): string =>
	date
		? new Date(date).toLocaleDateString("en-us", {
				year: "numeric",
				month: "short",
				day: "numeric",
			})
		: "";
