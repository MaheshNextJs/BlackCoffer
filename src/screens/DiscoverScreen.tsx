/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  ScrollView,
} from 'react-native';
import {COLORS} from '../constants';

const p1 = require('../assets/images/p1.jpg');

function PostCard() {
  const [isFollowing, setIsFollowing] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  const [likeCount, setLikeCount] = React.useState(0);
  const [comments, setComments] = React.useState<string[]>([]);
  const [commentText, setCommentText] = React.useState('');

  const toggleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev + 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(prev => !prev);
  };

  const addComment = () => {
    if (commentText.trim().length === 0) return;
    setComments(prev => [...prev, commentText.trim()]);
    setCommentText('');
  };

  return (
    <View style={styles.card}>
      <View style={styles.userRow}>
        <Image source={p1} style={styles.avatar} />
        <Text style={styles.username}>Mahesh Bairi ✅</Text>
        <TouchableOpacity
          style={styles.followButton}
          onPress={() => setIsFollowing(prev => !prev)}>
          <Text style={styles.followText}>
            {isFollowing ? 'Following' : 'Follow'}
          </Text>
        </TouchableOpacity>
      </View>

      <Image source={p1} style={styles.postImage} />
      <Text style={styles.meta}>7th July · Sec-15, Noida · 253 Views</Text>
      <Text style={styles.title}>
        Mahesh Bairi skilled in React Native, JavaScript, and TypeScript. He is
        a passionate developer with a keen interest in mobile app development.
      </Text>

      <View style={styles.actions}>
        <TouchableOpacity onPress={toggleLike} style={styles.likeButtonRow}>
          <Text style={styles.likeCount}>{likeCount}</Text>
          <Text style={{fontSize: 18}}>{isLiked ? '❤️' : '❤️'}</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 18}}>💬</Text>
        <Text style={{fontSize: 18}}>🔄</Text>
      </View>

      <View style={styles.commentSection}>
        {comments.map((c, idx) => (
          <Text key={idx} style={styles.commentText}>
            {c}
          </Text>
        ))}
        <View style={styles.commentInputRow}>
          <TextInput
            placeholder="Add a comment..."
            style={styles.commentInput}
            value={commentText}
            onChangeText={setCommentText}
            onSubmitEditing={addComment}
            returnKeyType="send"
          />
          <TouchableOpacity style={styles.commentButton} onPress={addComment}>
            <Text style={styles.commentButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default function DiscoverScreen() {
  const [showTerms, setShowTerms] = useState(true);

  const acceptTerms = () => setShowTerms(false);

  return (
    <View style={styles.container}>
      {/* Terms & Conditions Modal */}
      <Modal
        visible={showTerms}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {}}>
        <View style={styles.modalOverlay}>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Text style={styles.modalTitle}>Terms and Conditions</Text>
            <Text style={styles.modalText}>
              Welcome to Black Coffer!{'\n\n'}- You can follow/unfollow users by
              tapping the Follow button.{'\n'}- Like posts by tapping the ❤️
              button; likes will increase/decrease.{'\n'}- Add comments to posts
              using the comment box below each post.{'\n'}- Comments will appear
              immediately below the post.{'\n\n'}
              Enjoy engaging with the community!
            </Text>
            <TouchableOpacity style={styles.acceptButton} onPress={acceptTerms}>
              <Text style={styles.acceptButtonText}>Accept</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>

      <View style={styles.appHeader}>
        <Text style={styles.appHeaderText}>Black Coffer</Text>
      </View>

      <View style={styles.searchBar}>
        <TextInput placeholder="Search" style={styles.input} />
      </View>

      <FlatList
        data={[1, 2, 3, 4]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => <PostCard />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  appHeader: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    alignItems: 'center',
  },
  appHeaderText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: COLORS.primary,
    padding: 10,
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: {
    marginLeft: 10,
    flex: 1,
    fontWeight: 'bold',
  },
  followButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  followText: {
    color: COLORS.white,
  },
  postImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginTop: 8,
  },
  meta: {
    fontSize: 12,
    color: COLORS.lightText,
    marginTop: 4,
  },
  title: {
    marginVertical: 6,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  likeCount: {
    marginRight: 4,
  },
  likeButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentSection: {
    marginTop: 10,
  },
  commentText: {
    fontSize: 12,
    color: COLORS.lightText,
    marginVertical: 2,
  },
  commentInputRow: {
    flexDirection: 'row',
    marginTop: 6,
    alignItems: 'center',
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 36,
  },
  commentButton: {
    marginLeft: 8,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  commentButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: '50%',
  },
  modalContent: {
    width: '90%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
  },

  modalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 22,
  },
  acceptButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  acceptButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
