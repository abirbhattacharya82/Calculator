function print_number(a)
{
    var z=""+document.getElementById('Result').innerHTML+a;
    document.getElementById('Result').innerHTML=""+z;
}
function clearfn()
{
    document.getElementById('Result').innerHTML="";
}
function plus()
{
    var z=document.getElementById('Result').innerHTML;
    if(z.indexOf('+')==-1 && z.indexOf('-')==-1 && z.indexOf('X')==-1 && z.indexOf('/')==-1)
    {
        z=z+"+";
        document.getElementById('Result').innerHTML=z;
    }
    else
    {
        if(z.indexOf('+')!=-1)
        {
            var s1=z.substring(0,z.indexOf('+'));
            var s2=z.substring(z.indexOf('+')+1);
            var s3=parseFloat(s1)+parseFloat(s2);
            console.log('Triggered');
            document.getElementById('Result').innerHTML=s3+'+';
        }
        else if(z.indexOf('-')!=-1)
        {
            var s1=z.substring(0,z.indexOf('-'));
            var s2=z.substring(z.indexOf('-')+1);
            var s3=parseFloat(s1)-parseFloat(s2);
            document.getElementById('Result').innerHTML=s3+'+';
        }
        else if(z.indexOf('X')!=-1)
        {
            var s1=z.substring(0,z.indexOf('X'));
            var s2=z.substring(z.indexOf('X')+1);
            var s3=parseFloat(s1)*parseFloat(s2);
            document.getElementById('Result').innerHTML=s3+'+';
        }
        else if(z.indexOf('/')!=-1)
        {
            var s1=z.substring(0,z.indexOf('/'));
            var s2=z.substring(z.indexOf('/')+1);
            var s3=parseFloat(s1)/parseFloat(s2);
            document.getElementById('Result').innerHTML=s3+'+';
        }
    }
}
function minus()
{
    var z=document.getElementById('Result').innerHTML;
    if(z.indexOf('+')==-1 && z.indexOf('-')==-1 && z.indexOf('X')==-1 && z.indexOf('/')==-1)
    {
        z=z+"-";
        document.getElementById('Result').innerHTML=z;
    }
    else
    {
        if(z.indexOf('+')!=-1)
        {
            var s1=z.substring(0,z.indexOf('+'));
            var s2=z.substring(z.indexOf('+')+1);
            var s3=parseFloat(s1)+parseFloat(s2);
            document.getElementById('Result').innerHTML=s3+'-';
        }
        else if(z.indexOf('-')!=-1)
        {
            var s1=z.substring(0,z.indexOf('-'));
            var s2=z.substring(z.indexOf('-')+1);
            var s3=parseFloat(s1)-parseFloat(s2);
            document.getElementById('Result').innerHTML=s3+'-';
        }
        else if(z.indexOf('X')!=-1)
        {
            var s1=z.substring(0,z.indexOf('X'));
            var s2=z.substring(z.indexOf('X')+1);
            var s3=parseFloat(s1)*parseFloat(s2);
            document.getElementById('Result').innerHTML=s3+'-';
        }
        else if(z.indexOf('/')!=-1)
        {
            var s1=z.substring(0,z.indexOf('/'));
            var s2=z.substring(z.indexOf('/')+1);
            var s3=parseFloat(s1)/parseFloat(s2);
            document.getElementById('Result').innerHTML=s3+'-';
        }
    }
}
function mult()
{
    var z=document.getElementById('Result').innerHTML;
    if(z.indexOf('+')==-1 && z.indexOf('-')==-1 && z.indexOf('X')==-1 && z.indexOf('/')==-1)
    {
        z=z+"X";
        document.getElementById('Result').innerHTML=z;
    }
    else
    {
        if(z.indexOf('+')!=-1)
        {
            var s1=z.substring(0,z.indexOf('+'));
            var s2=z.substring(z.indexOf('+')+1);
            var s3=parseFloat(s1)+parseFloat(s2);
            document.getElementById('Result').innerHTML=s3+'X';
        }
        else if(z.indexOf('-')!=-1)
        {
            var s1=z.substring(0,z.indexOf('-'));
            var s2=z.substring(z.indexOf('-')+1);
            var s3=parseFloat(s1)-parseFloat(s2);
            document.getElementById('Result').innerHTML=s3+'X';
        }
        else if(z.indexOf('X')!=-1)
        {
            var s1=z.substring(0,z.indexOf('X'));
            var s2=z.substring(z.indexOf('X')+1);
            var s3=parseFloat(s1)*parseFloat(s2);
            document.getElementById('Result').innerHTML=s3+'X';
        }
        else if(z.indexOf('/')!=-1)
        {
            var s1=z.substring(0,z.indexOf('/'));
            var s2=z.substring(z.indexOf('/')+1);
            var s3=parseFloat(s1)/parseFloat(s2);
            document.getElementById('Result').innerHTML=s3+'X';
        }
    }
}
function div()
{
    var z=document.getElementById('Result').innerHTML;
    if(z.indexOf('+')==-1 && z.indexOf('-')==-1 && z.indexOf('X')==-1 && z.indexOf('/')==-1)
    {
        z=z+"/";
        document.getElementById('Result').innerHTML=z;
    }
    else
    {
        if(z.indexOf('+')!=-1)
        {
            var s1=z.substring(0,z.indexOf('+'));
            var s2=z.substring(z.indexOf('+')+1);
            var s3=parseFloat(s1)+parseFloat(s2);
            document.getElementById('Result').innerHTML=s3+'/';
        }
        else if(z.indexOf('-')!=-1)
        {
            var s1=z.substring(0,z.indexOf('-'));
            var s2=z.substring(z.indexOf('-')+1);
            var s3=parseFloat(s1)-parseFloat(s2);
            document.getElementById('Result').innerHTML=s3+'/';
        }
        else if(z.indexOf('X')!=-1)
        {
            var s1=z.substring(0,z.indexOf('X'));
            var s2=z.substring(z.indexOf('X')+1);
            var s3=parseFloat(s1)*parseFloat(s2);
            document.getElementById('Result').innerHTML=s3+'/';
        }
        else if(z.indexOf('/')!=-1)
        {
            var s1=z.substring(0,z.indexOf('/'));
            var s2=z.substring(z.indexOf('/')+1);
            var s3=parseFloat(s1)/parseFloat(s2);
            document.getElementById('Result').innerHTML=s3+'/';
        }
    }
}
function equal()
{
    var z=document.getElementById('Result').innerHTML;
    if(z.indexOf('+')==-1 && z.indexOf('-')==-1 && z.indexOf('X')==-1 && z.indexOf('/')==-1)
    {
        document.getElementById('Result').innerHTML=z;
    }
    else
    {
        if(z.indexOf('+')!=-1)
        {
            var s1=z.substring(0,z.indexOf('+'));
            var s2=z.substring(z.indexOf('+')+1);
            var s3=parseFloat(s1)+parseFloat(s2);
            document.getElementById('Result').innerHTML=s3;
        }
        else if(z.indexOf('-')!=-1)
        {
            var s1=z.substring(0,z.indexOf('-'));
            var s2=z.substring(z.indexOf('-')+1);
            var s3=parseFloat(s1)-parseFloat(s2);
            document.getElementById('Result').innerHTML=s3;
        }
        else if(z.indexOf('X')!=-1)
        {
            var s1=z.substring(0,z.indexOf('X'));
            var s2=z.substring(z.indexOf('X')+1);
            var s3=parseFloat(s1)*parseFloat(s2);
            document.getElementById('Result').innerHTML=s3;
        }
        else if(z.indexOf('/')!=-1)
        {
            var s1=z.substring(0,z.indexOf('/'));
            var s2=z.substring(z.indexOf('/')+1);
            var s3=parseFloat(s1)/parseFloat(s2);
            document.getElementById('Result').innerHTML=s3;
        }
    }
}