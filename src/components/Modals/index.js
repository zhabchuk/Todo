import React from 'react';
import { useSelector } from 'react-redux';
import ModalDeleteCategory from '../../conteiners/ModalDeleteCategory';
import ModalEditCategoryConteiner from '../../conteiners/ModalEditCategoryConteiner';
import ModalEditTaskConteiner from '../../conteiners/ModalEditTaskConteiner';
// import ModalDelete from './ModalDelete';


const modalCollections = {
    ModalDelete: ModalDeleteCategory,
    ModalEditTask: ModalEditTaskConteiner,
    ModalEditCategory: ModalEditCategoryConteiner
}

export default function Modals() {
    const modal = useSelector((state) => state.modals);
    if (!modal.length) {
        return null
    }
    return <>
        {modal.map((item) => {
            const CurrentModal = modalCollections[item.name]
            return <CurrentModal {...item} key={item.name}/>
        })}
    </>
}