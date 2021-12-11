

const CusineTypes = (props) => {
    let renderMeal = '';
    if (props.cusines) {
        renderMeal = props.cusines.map((i) => {
            return <span className="label label-info" id="cuisineLabel">{i.cuisine_name}</span>
        })


    }

    return (<>
        {renderMeal}
    </>)

}

export default CusineTypes;