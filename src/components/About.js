import React,{useState} from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color:"black",
    //     backgroundColor:"white"
    // })

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743', 
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    }


    return (
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1 className='my-2'>About us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is a free character counter tool that provides instant character count & word count statistic for a given text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>     
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explore, Safari.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
