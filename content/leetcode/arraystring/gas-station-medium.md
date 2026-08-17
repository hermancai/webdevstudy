## title

Gas Station (Medium)

## question

<a href="https://leetcode.com/problems/gas-station/description" target="_blank">Gas Station</a> (Medium)

There are `n` gas stations along a circular route, where the amount of gas at the `i`<sup>th</sup> station is `gas[i]`.

You have a car with an unlimited gas tank and it costs `cost[i]` of gas to travel from the `i`<sup>th</sup> station to its next `(i + 1)`<sup>th</sup> station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays `gas` and `cost`, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return `-1`. If there exists a solution, it is guaranteed to be unique.

## answer

```py
def canCompleteCircuit(gas: List[int], cost: List[int]) -> int:
    if sum(gas) < sum(cost):
        return -1

    # An answer is guaranteed at this point
    net = 0
    answer = 0

    for i in range(len(gas)):
        net += gas[i] - cost[i]
        # If net becomes negative, answer must be at least after i
        if net < 0:
            net = 0
            answer = i + 1

    return answer
```

Time: O(n)

Space: O(1)
