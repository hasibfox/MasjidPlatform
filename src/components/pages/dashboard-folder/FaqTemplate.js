import React from 'react';
import './Dashboard.css';

const FaqTemplate = ({current, FaqActive, setFaqActive}) => {
    return (
        <>
            <div className="faq-container">
                <div className="faq-header" onClick={ () => setFaqActive(current)}>
                    <p>What is Lorem Ipsum? </p>
                    <i class="fas fa-caret-up"></i>
                </div>  

                <div>
                    <div className={(FaqActive === current ? "show" : "faq-text") }>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>  
            </div>    
        </>
    )

}

export default FaqTemplate
