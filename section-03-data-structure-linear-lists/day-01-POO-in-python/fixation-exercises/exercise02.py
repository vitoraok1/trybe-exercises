from collections import Counter


class Estatistica:
    def __init__(self, numbers):
        self.numbers = numbers

    def media(self):
        sum = 0
        for number in self.numbers:
            sum += number
        return sum / len(self.numbers)
        """return sum(self.numbers) / len(self.numbers)"""

    def mediana(self):
        numbers = sorted(self.numbers)
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[index - 1] + numbers[index]) / 2

        return numbers[index]

    def moda(self):
        number, _ = Counter(self.numbers).most_common()[0]
        return number
