import Lottie from 'react-lottie';


export default function LottieViewer({ animationData }){


    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return <div>
      <Lottie options={defaultOptions}
        height={300}
        width={300}
        />
    </div>

}