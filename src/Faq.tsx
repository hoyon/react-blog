import React, { useEffect, useState } from 'react';
import { FaqItem, getFaqItems } from './post_data';
import { RichText, RichTextBlock } from 'prismic-reactjs';

function Faq() {
    const [items, setItems] = useState<FaqItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const items = await getFaqItems(); 
            if (items) {
                setItems(items);
            }
        }
        fetchData();
    }, [])

    return (
        <div className='container mx-auto'>
            <h1>FAQ</h1>
            {items.map(i => {
                console.log(i);
                return (
                    <div>
                        <RichText render={i.question as RichTextBlock[]} />
                        <RichText render={i.answer as RichTextBlock[]} />
                    </div>
                )
            })}
        </div>
    )
}

export default Faq;