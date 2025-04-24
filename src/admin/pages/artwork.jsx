import React, { useState } from "react";
import PaginationTable from "../components/paginationTable";
import { Modal } from "../components/modal";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

const data = [
    {
        id: 1,
        name: 'Croqskin Purse',
        price: 29.99,
        description: 'Yes, It Is Real; The Crocodile Head Right Through To The Croc Skin. All Real. No Cap.',
        image: 'https://via.placeholder.com/40', // Replace with actual image URL
    },
    // ... add more
];

export const Artwork = () => {
    const [form, setForm] = useState({
        name: '',
        price: null,
        description: '',
    })

    const [isOpen, setIsOpen] = useState(null);
    const [images, setImages] = useState([null, null, null, null, null, null]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setForm((prev) => ({...prev, [name]: value}));
    }

    const handleImageChange = (index, file) => {
        const updatedImages = [...images];
        updatedImages[index] = file;
        setImages(updatedImages);
    };

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const addNewArt = () => {
        setForm({
            name: '',
            price: null,
            description: '',
        })
        setImages([null, null, null, null, null, null])
        toggleModal()
    }

    const toggleUpdate = (artwork)  => {

        setForm(artwork);
        toggleModal()
    }
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
                <h3 className="font-bold text-white text-[24px]">Artwork</h3>
                <span className="text-[#A9A9A9]">Artwork {'>'} <Link to='/dashboard/orders'>Orders</Link></span>
            </div>


            <div className="flex flex-col gap-5">
                <div className="flex justify-between text-xl text-white">
                    Artwork
                    <button onClick={addNewArt} className="bg-[#CDFFAD] px-[18px] py-[9px] rounded-lg flex gap-2 text-[#0A0A0A]">
                        <img src="/assets/icons/add.svg" alt="add" />
                        Add New Art Work
                    </button>
                </div>
                <PaginationTable type="normal" data={data} onUpdateClick={toggleUpdate} />
            </div>

            <Modal isOpen={isOpen} onClose={toggleModal} title={form.id ? form.name : 'Add new artwork'}>
                <div className="flex flex-col gap-[110px] px-6 py-8">
                    <div className="flex flex-col gap-6">
                        <Input label="Art Name" id="name" name="name" onChange={handleInputChange} value={form.name} placeholder="Enter Art Name" />
                        <Input type="number" label="Art Price" id="price" name="price" onChange={handleInputChange} value={form.price} placeholder="Enter Art Price" />
                        <Input type="textarea" label="About Art" id="description" onChange={handleInputChange} name="description" value={form.description} placeholder="Describe Art" />
                        <div className="flex flex-col gap-[5px]">
                            <label className="text-sm text-white font-bold capitalize">Art Image</label>
                            <div className="grid grid-cols-3 gap-3">
                                {images.map((img, index) => (
                                    <label
                                        key={index}
                                        className="border border-[#595959 rounded-xl h-24 flex items-center justify-center cursor-pointer bg-[#2B2B2B]"
                                    >
                                        {img ? (
                                            <img
                                                src={URL.createObjectURL(img)}
                                                alt="preview"
                                                className="h-full w-full object-cover rounded-md"
                                            />
                                        ) : (
                                            <img src="/assets/icons/img-add.svg" alt="" srcset="" />
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => handleImageChange(index, e.target.files[0])}
                                        />
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    {form.id ? <button className="w-full py-3 border border-[#CDFFAD] rounded-xl text-[#CDFFAD]">Update</button>
                    :
                    <button className="w-full py-3 bg-[#CDFFAD] rounded-xl text-[#0A0A0A]">Add</button>
                     }
                </div>
            </Modal>
        </div>
    )
}