import React from 'react';

const ImageCard = (props) => {

    const { strMealThumb, strMeal, strCategory, strIngredient1, strIngredient2, strIngredient3 } = props.image;
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
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
                        <strong>Gredient : </strong>
           300
          </li>
                    <li>
                        <strong>Likes : </strong>
             400
          </li>
                </ul>

            </div>

            <div className="px-6 py-4">
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


            </div>

        </div>
    );
};

export default ImageCard;