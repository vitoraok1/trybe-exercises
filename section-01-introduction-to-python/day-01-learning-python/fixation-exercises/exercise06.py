def type_of_triangle(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3
        and side2 + side3 > side1
        and side1 + side3 > side2
    )
    if not is_triangle:
        return "isn´t a triangle"
    elif side1 == side2 == side3:
        return "equilateral"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isosceles"
    else:
        return "scalene"


print(
    "Test types_of_triangle function -",
    type_of_triangle(5, 5, 5),
)
