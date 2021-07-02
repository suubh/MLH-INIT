import tweepy 

consumer_key = 'F5tyZ03zAztoy1D5CEHGvQOo4'
consumer_secret = 'HqdFwuJ0PUEFt7cLtHAcyI4vfjziHBlLDfHkCrWn4OJzuCd7hW'
access_token = '1317521992153591808-mLFVaifLpVFKymeNTrCnTFbMB1T4a1'
access_token_secret = 'L7K5vN9CSeNwzhMxam5eZFDsmhPUEV7LW1gHzvu0dgNn5'

def OAuth():
	try:
		auth=tweepy.OAuthHandler(consumer_key,consumer_secret)
		auth.set_access_token(access_token,access_token_secret)
		return auth 

	except Exception as e:
		return None 


oauth =OAuth()
api = tweepy.API(oauth)
#Post a Tweet to my account
api.update_status('Tweet from API !')
print("Successful !")