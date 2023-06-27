def arithmetic_average(list):
    """Take a list and return the arithmetic average"""
    total = 0
    for number in list:
        total += number
    return total / len(list)


print("Test arithmetic_average function -", arithmetic_average([1, 2, 3, 4]))
