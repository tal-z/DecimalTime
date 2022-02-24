import matplotlib.pyplot as plt


def make_clockface():
    fig, ax = plt.subplots()
    sizes = [1 for num in range(10)]
    ax.pie(sizes,
           colors=["white" for i in range(10)],
           labels=list(str(9-i) for i in range(10)),
           startangle=108,
           rotatelabels=False,
           explode=[.2 for i in range(10)]
           )
    ax.pie(sizes*10,
           colors=["white" for i in range(100)],
           labels=list(" -- " for i in range(100)),
           rotatelabels=True,
           explode=[0 for i in range(100)]
    )
    plt.show()

make_clockface()