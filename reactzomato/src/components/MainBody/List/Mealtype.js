

const Mealtype = (props) => {
    let renderMeal = '';
    if (props.mealType) {
        renderMeal = props.mealType.map((i) => {
            return < span class="label label-primary" id="mealTypeLabel" >{i.mealtype_name}</span>
        })


    }

    return (<>
        {renderMeal}
    </>)

}

export default Mealtype;