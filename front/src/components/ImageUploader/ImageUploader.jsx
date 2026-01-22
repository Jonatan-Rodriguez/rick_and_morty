import React, { useState } from 'react';
import axios from 'axios';
import { UploadCloud, Image as Loader2, Trash2 } from 'lucide-react';
import {
  UploaderContainer,
  DropZone,
  HiddenInput,
  PreviewImage,
  Placeholder,
  LoadingOverlay,
  RemoveButton
} from './ImageUploader.styled';

// CONFIGURACIÓN DE CLOUDINARY
const CLOUD_NAME = "dve6cccqm";
const UPLOAD_PRESET = "Preset_rick";

const ImageUploader = ({ onImageUpload, initialImage = '' }) => {
    const [image, setImage] = useState(initialImage);
    const [loading, setLoading] = useState(false);
    const [isDragActive, setIsDragActive] = useState(false);

    // Subir a Cloudinary
    const uploadImage = async (files) => {
        const file = files[0];
        if (!file) return;

        // Validación básica
        if (!file.type.startsWith('image/')) {
            alert('Por favor sube solo archivos de imagen');
            return;
        }

        setLoading(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', UPLOAD_PRESET);

        try {
            const res = await axios.post(
                `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
                formData
            );
            
            // ÉXITO: Cloudinary devuelve la URL
            const imageUrl = res.data.secure_url;
            setImage(imageUrl);
            
            onImageUpload(imageUrl);
            
        } catch (error) {
            console.error("Error subiendo imagen:", error);
            alert("Error al subir la imagen. Revisa tu configuración de Cloudinary.");
        } finally {
            setLoading(false);
        }
    };

    // Manejadores de eventos
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragActive(true);
    };

    const handleDragLeave = () => {
        setIsDragActive(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragActive(false);
        uploadImage(e.dataTransfer.files);
    };

    const handleChange = (e) => {
        uploadImage(e.target.files);
    };

    const handleRemove = (e) => {
        e.stopPropagation();
        setImage('');
        onImageUpload('');
    };

    return (
        <UploaderContainer>
            <DropZone 
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => document.getElementById('fileInput').click()}
                $isDragActive={isDragActive}
            >
                <HiddenInput 
                    id="fileInput" 
                    type="file" 
                    accept="image/*" 
                    onChange={handleChange} 
                />

                {loading && (
                    <LoadingOverlay>
                        <Loader2 className="spinner" size={40} />
                        <span>Subiendo a la dimensión...</span>
                    </LoadingOverlay>
                )}

                {image ? (
                    <>
                        <PreviewImage src={image} alt="Preview" />
                        <RemoveButton onClick={handleRemove} type="button">
                            <Trash2 size={16} />
                        </RemoveButton>
                    </>
                ) : (
                    <Placeholder>
                        <UploadCloud size={40} />
                        <p>Haz clic o arrastra una imagen aquí</p>
                        <span>JPG, PNG, WEBP</span>
                    </Placeholder>
                )}
            </DropZone>
        </UploaderContainer>
    );
};

export default ImageUploader;