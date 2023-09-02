
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Segment, Divider, Container, Label } from 'semantic-ui-react'
import { ItemContext } from '../contexts/ItemContext'

function NewItem() {
    const {items, setItems} = useContext(ItemContext)
    const [name, setName] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    function handleAddItem(newItem) {
        setItems([...items, newItem])
      }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name, 
                image_url: imageUrl,
                description,
                price: Number(price)
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((newItem) => handleAddItem(newItem))
                navigate("/")
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
    <>
    <Divider hidden />
    <Container>
    <Segment color='violet' raised>
    <Label size='massive' as='a' color='black' ribbon>
          Add a New Item
    </Label>
    <Divider hidden />
    <Form onSubmit={handleSubmit}>
        <Form.Field>
            <label>Item Name</label>
            <input 
            type='text'
            name='name'
            value={name}
            placeholder='Item Name'
            onChange={(e) => setName(e.target.value)}
            />
            </Form.Field>
            <Form.Field>
            <label>Item ImageUrl</label>
            <input 
            type='text'
            name='image_url'
            value={imageUrl}
            placeholder='Item ImageUrl'
            onChange={(e) => setImageUrl(e.target.value)}
            />
            </Form.Field>
            <Form.Field>
            <label>Item Description</label>
            <textarea 
            type='text'
            name='description'
            value={description}
            placeholder='Item Description'
            onChange={(e) => setDescription(e.target.value)}
            />
        </Form.Field>
        <Form.Field>
            <label>Item Price</label>
            <input 
            type='text'
            name='price'
            value={price}
            placeholder='Item Price'
            onChange={(e) => setPrice(e.target.value)}
            />
            </Form.Field>
            <Form.Field>
                {errors.map((err) => (
                    <Label key={err}>{err}</Label>
                ))}
            </Form.Field>
        <Form.Field>
        <Button size='tiny' inverted color='green' floated='right'>Submit</Button>
        </Form.Field>
    </Form>
    <Divider hidden />
    <Divider hidden />
    </Segment>
    <Divider hidden />
    </Container>
    </>
    )
}

export default NewItem