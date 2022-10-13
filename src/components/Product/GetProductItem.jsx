function GetProductItem ({item}) {
    return (
        <tr>
            <td>
                <img src={item.product_url}/>
            </td>
            <td>{item.brand_name}</td>
            <td>{item.description}</td>
        </tr>
    )
}

export default GetProductItem;