import { Text } from '@geist-ui/core'
import './BubbleButton.css';
import React from 'react';

const Cards = () => {
    const getBase64Image = (url, callback) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            const reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    };
    const handleSaveContact = () => {
        const contact = {
            firstName: "Tim",
            lastName: "Ordnung",
            phone: "+4916093077277",
            email: "kontakt@feinsteordnung.de",
        };

        const vcard = `BEGIN:VCARD
        VERSION:4.0
        FN:${contact.firstName} ${contact.lastName}
        N:${contact.lastName};${contact.firstName};;;
        TEL;TYPE=work,voice:${contact.phone}
        EMAIL:${contact.email}
        END:VCARD`;

        const blob = new Blob([vcard], { type: "text/vcard" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `${contact.firstName}_${contact.lastName}.vcf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

   
    return <>
        <div onClick={() => handleSaveContact()} className="bubble-button">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Text>Kontakt speichern1</Text>
            </div>
        </div>
        <a href="https://www.instagram.com/feinsteordnung" target="_blank" rel="noopener noreferrer" className="bubble-button">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Text>Instagram</Text>
            </div>
        </a>
        <a href="https://tiktok.com/@feinsteordnung" target="_blank" rel="noopener noreferrer" className="bubble-button">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Text>TikTok</Text>
            </div>
        </a>
    </>
}

export default Cards;