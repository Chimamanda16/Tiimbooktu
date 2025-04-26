import React, { useEffect, useState } from "react";
import PaginationTable from "../components/paginationTable";
import { Modal } from "../components/modal";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import useAdminStore from "../../Store/useAdminStore";
import { Loader } from "lucide-react";

export const Artwork = () => {
    const { fetchAllArtworks, artworks, createArtwork, updateArtwork, deleteArtwork, loading } = useAdminStore();

    const [form, setForm] = useState({
        name: '',
        base_price: null,
        stock: null,
        description: '',
    })
    const [isOpen, setIsOpen] = useState(null);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [images, setImages] = useState([null, null, null, null, null, null]);

    useEffect(() => {
        fetchAllArtworks();
    }, [fetchAllArtworks])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    const handleImageChange = (index, file) => {
        const updatedImages = [...images];
        updatedImages[index] = file;
        setImages(updatedImages);
    };

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const deleteItem = (id) => {
        deleteArtwork(id);
    }

    const resetForm = () => {
        setForm({
            name: '',
            base_price: null,
            stock: null,
            description: '',
        })
        setImages([null, null, null, null, null, null])
    }

    const addNewArt = () => {
        resetForm();
        toggleModal();
    }

    const create = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('base_price', form.base_price);
        formData.append('description', form.description);
        formData.append('category_id', '');
        formData.append('artist', form.name);
        formData.append('stock', form.stock);

        images.forEach((img, index) => {
            if (img) {
                formData.append(`images[${index}]`, img);
            }
        });
        const res = await createArtwork(formData);
        if (res) {
            toggleModal();
            setUploadSuccess(true)
        }
    }
    const closeSuccessModal = () => {
        setUploadSuccess(false);
        resetForm()
    }

    const update = async (e) => {
        e.preventDefault();
        let payload = {
            name: form.name,
            base_price: form.base_price,
            description: form.description,
            stock: form.stock
        }

        const res = await updateArtwork(payload, form.id);
        if (res) {
            toggleModal();
            resetForm();
        }
    }

    const toggleUpdate = (artwork) => {
        setForm(artwork);
        const imageUrls = artwork.images.map(img => img.url);
        while (imageUrls.length < 6) {
            imageUrls.push(null);
        }
        setImages(imageUrls);
        toggleModal();
    }
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
                <h3 className="font-bold text-white text-[24px]">Artwork</h3>
                <span className="text-[#A9A9A9]">Artwork {'>'} <Link to='/dashboard'>Overview</Link></span>
            </div>


            <div className="flex flex-col gap-5">
                <div className="flex justify-between text-xl text-white">
                    Artwork
                    <button onClick={addNewArt} className="bg-[#CDFFAD] px-[18px] py-[9px] rounded-lg flex gap-2 text-[#0A0A0A]">
                        <img src="/assets/icons/add.svg" alt="add" />
                        Add New Art Work
                    </button>
                </div>
                <PaginationTable type="normal" data={artworks} onUpdateClick={toggleUpdate} onDeleteClick={deleteItem} />
            </div>

            <Modal isOpen={isOpen} onClose={toggleModal} title={form.id ? form.name : 'Add new artwork'}>
                <form onSubmit={(e) => form.id ? update(e) : create(e)} className="flex flex-col gap-[110px] px-6 py-8">
                    <div className="flex flex-col gap-6">
                        <Input required label="Art Name" id="name" name="name" onChange={handleInputChange} value={form.name} placeholder="Enter Art Name" />
                        <Input required type="number" label="Art Price" id="base_price" name="base_price" onChange={handleInputChange} value={form.base_price} placeholder="Enter Art Price" />
                        <Input required type="number" label="Number of Item in Stock" id="stock" name="stock" onChange={handleInputChange} value={form.stock} placeholder="Enter Number of Item In Stock" />
                        <Input required type="textarea" label="About Art" id="description" onChange={handleInputChange} name="description" value={form.description} placeholder="Describe Art" />
                        {!form?.id && <div className="flex flex-col gap-[5px]">
                            <label className="text-sm text-white font-bold capitalize">Art Image</label>
                            <div className="grid grid-cols-3 gap-3">
                                {images.map((img, index) => (
                                    <label
                                        key={index}
                                        className="border border-[#595959 rounded-xl h-24 flex items-center justify-center cursor-pointer bg-[#2B2B2B]"
                                    >
                                        {img ? (
                                            <img
                                                src={
                                                    img instanceof File
                                                        ? URL.createObjectURL(img)
                                                        : img
                                                }
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
                        </div>}

                    </div>
                    {form.id ? <button disabled={loading} className="w-full py-3 border flex justify-center border-[#CDFFAD] rounded-xl text-[#CDFFAD]">
                        {loading ? (<Loader className="animate-spin" />) : ("Update")}
                    </button>
                        :
                        <button disabled={loading} type="submit" className="w-full py-3 bg-[#CDFFAD] rounded-xl flex justify-center text-[#0A0A0A]">
                            {loading ? (<Loader className="animate-spin" />) : ("Add")}
                        </button>
                    }
                </form>
            </Modal>

            {uploadSuccess && <div className="fixed inset-0 flex items-start justify-center z-50 bg-black bg-opacity-50">
                <div className="bg-[#0A0A0A] mt-[100px] relative rounded-[20px] py-11 px-[72px] flex flex-col items-center gap-6 text-center">
                    <img onClick={closeSuccessModal} className="absolute right-6 top-5" src="/assets/icons/close-icon.svg" alt="close" />
                    <img height={112} width={140} src="/assets/icons/upload-success.svg" alt="" />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-white font-chango text-[26px]">Upload <br /> Successful</h2>
                        <p className="text-[#666] capitalize">Your art work {form.name} has been successfully created</p>
                    </div>
                </div>
            </div>}
        </div>
    )
}