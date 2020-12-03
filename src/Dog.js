import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

const Dog = () => {
	const [randomDogPicture, setRandomDogPic] = useState("");

	useEffect(() => {
		let isSubscribed = true
		const getRandomDogPicture = async () => {

        axios.get('https://random.dog/woof.json')
            .then(res => isImageVideo(res.data.url))
            .catch(err => err)
        }

		const isImageVideo = (image) => {
			if (image.includes(".mp4")) {
				getRandomDogPicture();
			} else {
				if(isSubscribed) setRandomDogPic(image);
			}
		};
		getRandomDogPicture();
		return () => isSubscribed = false
	}, []);

	

	return (
        <img
            className='doggo-image'
            src={randomDogPicture}
            alt="Random Dog"
        />
	);
};

export default Dog;
