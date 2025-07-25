def get_conformation(prompt: str) -> bool:
    ans: str = input(prompt).lower()
    if ans == "y" or ans == "yes" or ans == "true":
        return True
    elif ans == "n" or ans == "no" or ans == "false":
        return False
    else:
        print("Please provide a valid response")
        return get_conformation(prompt)


def get_int_in_range(
    prompt: str, _min: int = 0, _max: int | float = float("inf")
) -> int:
    ans: str = input(prompt)
    try:
        _int: int = int(ans)
    except ValueError:
        print("Invalid input. Please provide a valid number.")
        return get_int_in_range(prompt, _min, _max)

    if _min <= _int <= _max:
        return _int

    print("Invalid input. The provide input was not within the expected range.")
    return get_int_in_range(prompt, _min, _max)
