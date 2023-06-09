import axios from "axios";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Navbar from "@/components/navbar";

const index = () => {
  const url = "https://dockerpractice-rx3f.onrender.com/api/";
  const [ingredient, setIngredient] = useState();
  const [disease, setDisease] = useState();
  const [recipe, setRecipe] = useState();
  const [show, setShow] = useState(false);
  const [recipeImage, setRecipeImage] = useState();
  const [error, setError] = useState();
  // const [santitizedRecipe, setSanitizedRecipe] = useState();

  const sanitizeString = (str) => {
    // Remove special characters and convert to lowercase
    const sanitizedStr = str.replace(/[^\w\s]/gi, "").toLowerCase();
    // Replace spaces with underscores
    const finalStr = sanitizedStr.replace(/\s+/g, "%");
    return finalStr;
  };

  const handleMyApi = async (url) => {
    try {
      const resp = await axios.post(url, {
        ingredient: ingredient,
        disease: disease,
      });
      setRecipe(resp.data.Recipe);
      if (resp.data.Recipe) {
        setShow(true);
      } else {
        setShow(false);
        toast.error(resp.data); // can implement a better way to display this
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const handleRecipeApi = async (recipe) => {
  //   let query = sanitizeString(recipe);
  //   let url = `http://localhost:3000/api/spoonacular?query=${query}`;
  //   const resp = await axios.get(url);
  //   console.log(resp);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ingredient && disease && ingredient !== "0" && disease !== "0") {
      console.log("form submitted");
      toast.promise(handleMyApi(url), {
        loading: "Loading results...",
        success: <b>Loaded Successfully!</b>,
        error: <b>Error!</b>,
      });
    }
  };
  // useEffect(() => {
  //   if (show) {
  //     handleRecipeApi(recipe);
  //   }
  // }, [recipe]);

  return (
    <div className="overflow-y-hidden h-screen">
      <Toaster position="top-center" reverseOrder={true} />
      <Navbar />
      <div className="w-screen h-full flex justify-center items-center bg-cream">
        <div className="flex-col rounded-xl md:bg-forest items-center justify-center px-10 md:p-20 ">
          <form
            action=""
            className="flex-col space-y-8"
            onSubmit={handleSubmit}
          >
            <div className="">
              <label
                htmlFor="Ingredients"
                className="block text-2xl md:text-white font-mono "
              >
                Select an option
              </label>
              <select
                id="Ingredients"
                onChange={(e) => setIngredient(e.target.value)}
                className="bg-gray-50 border text-xl border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option value="0">[Choose Ingredient]</option>
                <option value="1">Rice</option>
                <option value="2">Milk</option>
                <option value="3">Sugar</option>
                <option value="4">Wheat</option>
                <option value="5">Soy</option>
              </select>
            </div>

            <div className="">
              <label
                htmlFor="countries"
                className="block mb-2 md:text-white text-2xl font-mono mt-3"
              >
                Select an option
              </label>
              <select
                id="countries"
                onChange={(e) => setDisease(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option value="0">[Choose Your Condition]</option>
                <option value="1">Obesity</option>
                <option value="2">Diabetes</option>
                <option value="3">Cardiovascular Disease</option>
                <option value="4">Cancer</option>
                <option value="5">Dental Disease</option>
                <option value="6">Osteoporosis</option>
              </select>

              <div className="">
                <button
                  type="submit"
                  className="p-3 bg-darkcream md:bg-cream text-black rounded-lg mt-10 transition delay-150 ease-in-out hover:bg-darkcream hover:text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className="p-6">
            {show && (
              <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Recommended recipe
                </h5>
                <p className="font-normal text-gray-700 text-xl text-clip">
                  {recipe}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
