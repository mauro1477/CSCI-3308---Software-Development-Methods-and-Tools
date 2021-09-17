
def wrangle_rectangles(m, n):
    verticalLines = m + 1;
    horizontalLines = n + 1;
    result = m * n * verticalLines * horizontalLines;

    return int(result/4);

def Main():
    print(wrangle_rectangles(1,1));
    print(wrangle_rectangles(1,2));

Main()
