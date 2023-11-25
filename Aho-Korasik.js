function include(arr, symbol) {
    for (var i = 0; i < arr.length; i++) if (arr[i] === symbol) return true;
    return false;
}
s = WScript.StdIn.ReadLine();
n = s.length;
t = WScript.StdIn.ReadLine();
m = t.length;
alph = new Array();
for(var i = 0; i < m; i++) alph[t.charAt(i)] = 0;
del = new Array(m+1);  
for (var j = 0; j <= m; j++) del[j] = new Array();
for(var i in alph) del[0][i] = 0;   
for (var j = 0; j < m; j++)
{
    prev = del[j][t.charAt(j)];
    del[j][t.charAt(j)] = j + 1;   
    for (i in alph) del[j+1][i] = del[prev][i]; 
};
var counter = 0;
var i = 0;
var flag = false;
while(i<n)
    {
        if(!(s.charAt(i) in alph)) counter = 0;
        else
        {
            while (true)
            {
                if(!(s.charAt(i) in alph))
                {
                    counter = 0;
                    break;
                }
                counter = del[counter][s.charAt(i)];
                if (counter == m)
                {
                    flag = true;
                    WScript.echo(i-m+1);
                    counter = 0;
                }
                i++;
            }
        }
        i++;
    }
if (!flag) WScript.echo("No enters")