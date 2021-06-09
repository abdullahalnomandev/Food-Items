import React from 'react';

const ImageCard = (props) => {

    const { strArea, strYoutube, strMealThumb, strMeal, strCategory, strIngredient1, strIngredient2, strIngredient3, strIngredient4 } = props.image;
    return (


        <div className="max-w-sm rounded overflow-hidden shadow-lg ">
            <img src={strMealThumb} alt="" className="w-full" />

            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    {strMeal}
                </div>

                <ul>
                    <li>
                        <strong>Category : </strong>
                        {strCategory}
                    </li>
                    <li>
                        <strong>Area : </strong>
                        {strArea}
                    </li>

                </ul>

            </div>

            <div className="px-6 py-4">
                <a style={{ textDecoration: 'underline', color: 'blue' }} href={strYoutube} target="_blank">Watch on YouTube</a>
                <h1 className="text-purple-700 text-opacity-75 text-lg">Gradient:</h1>

                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #{strIngredient1}
                </span>


                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #{strIngredient2}
                </span>


                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">
                    #{strIngredient3}
                </span>

                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">
                    #{strIngredient4}
                </span>


            </div>

        </div>
    );
};

export default ImageCard;