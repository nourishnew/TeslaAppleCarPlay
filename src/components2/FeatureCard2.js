import React from "react";
import "../style/featureCard.css";
import "../style2/App2.css";

export default function FeatureCard2({
	isDarkTheme,
	type,
	title,
	description,
	image,
	bg_color,
}) {
	return (
		<div className={isDarkTheme ? "featureBodyDark" : "featureBodyLight"}>
			<img className="featureImage" src={image} alt={description} />
			<div
				className={type === "Top Picks" ? "topPicksDescription" : "description"}
				style={{
					background: bg_color,
				}}>
				<p className="body2 textPrimaryWhite">{title}</p>
				{type === "Top Picks" ? (
					<p className="body2 textSecondaryWhite">
						{description.length > 30
							? description.substring(0, 30) + "..."
							: description}
					</p>
				) : null}
			</div>
		</div>
	);
}
