import { useVideoConfig, useCurrentFrame } from "remotion/";
export const MyComposition = () => {
	const { durationInFrames ,fps ,width, height } = useVideoConfig();
	const frame = useCurrentFrame()

	const opacity = frame/durationInFrames;

	return (
		<div
		style={
			{
				flex: 1,
				textAlign:'center',
				color:'white',
				fontSize:'80px',
				background: "black",
				opacity,
			}
		}>
			Good morning, I used a video of {width}*{height} px frame
		</div>
	)
};
