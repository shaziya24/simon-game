#include<bits/stdc++.h>
using  namespace std;
vector <int> countDistinct (int A[], int n, int k)
    {
        //code here.
        vector <int>ans; unordered_map<int,int>mp;
        for(int i=0;i<k;i++){
            mp[A[i]]++;
        }
        ans.push_back(mp.size());
        for(int i=0;i<n-k;i++){
            mp[A[i+k]]++;
            if(mp[A[i]]==1){
                mp.erase(A[i]);
            }
            else{
                mp[A[i]]--;
            }
            ans.push_back(mp.size());
        }
        return ans;
    }
int main(){
    int n; int a[n]; int k;
    cin>>n;
    cout<<"size is"<<n;
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
    cout<<"array is";
     for(int i=0;i<n;i++){
        cout<<a[i];
    }
    
    cin>>k;
    cout<<k;
    vector<int>ans=countDistinct(a,n,k);
    for(int i=0; i < ans.size(); i++){
           cout<<ans[i];
    }
   
    return 0;
}