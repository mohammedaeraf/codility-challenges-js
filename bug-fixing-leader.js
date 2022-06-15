class BugFixingLeader
{
    static main(args)
    {
        var A = [1, 1, 1, 50, 1];
        var result = BugFixingLeader.#solution(A);
        console.log(result);
    }
    static solution(a)
    {
        var hashMap = new Map();
        for (i; i < a.length; i++)
        {
            var currentNumber = hashMap.get(a[i]);
            if (currentNumber == null)
            {
                hashMap.set(a[i],1);
            }
            else 
            {
                hashMap.set(a[i],++currentNumber);
            }
        }
        var max = null;
        for ( const  i of java.util.HashMap.entrySet()) {
        if (max == null || i.getValue().compareTo(max.getValue()) > 0)
        {
            max = i;
        }
}
        if (max.getValue() > parseInt(a.length / 2))
        {
            return max.getKey();
        }
        return -1;
    }
}
BugFixingLeader.main([]);