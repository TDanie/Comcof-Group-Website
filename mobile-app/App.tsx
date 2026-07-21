import { useState } from "react";
import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import {
  CormorantGaramond_300Light,
  CormorantGaramond_500Medium,
} from "@expo-google-fonts/cormorant-garamond";
import {
  DMSans_300Light,
  DMSans_400Regular,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import { colors, fonts } from "./theme";
import { SHOP_EMAIL, weights, grinds, no1, comingNext } from "./content";

type Screen = "home" | "product";

function Wordmark({ height = 26 }: { height?: number }) {
  // Wordmark lockup rendered in type; the drawn logo lives in the packaging render.
  return (
    <Text
      style={{
        fontFamily: fonts.sansBold,
        fontSize: height * 0.62,
        letterSpacing: 2,
        color: colors.ivory,
      }}
      accessibilityRole="header"
    >
      COMC<Text style={{ color: colors.gold }}>O</Text>F
    </Text>
  );
}

function Label({ children }: { children: string }) {
  return <Text style={styles.label}>{children}</Text>;
}

function Pill({
  text,
  active,
  onPress,
}: {
  text: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      style={[styles.pill, active && styles.pillActive]}
    >
      <Text style={[styles.pillText, active && styles.pillTextActive]}>{text}</Text>
    </Pressable>
  );
}

function HomeScreen({ onDiscover }: { onDiscover: () => void }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ paddingBottom: 64 }}>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>COMCOF Shop</Text>
        <Text style={styles.heroSub}>
          Coffee from Ugandan origins.{"\n"}Prepared with care.{"\n"}Delivered
          directly to your door.
        </Text>
        <Pressable onPress={onDiscover} style={styles.btnPrimary} accessibilityRole="button">
          <Text style={styles.btnPrimaryText}>SHOP NO. 1</Text>
        </Pressable>
      </View>

      <Pressable onPress={onDiscover} style={styles.feature} accessibilityRole="button">
        <Image
          source={require("./assets/no1-bag.png")}
          style={styles.bag}
          resizeMode="contain"
          accessibilityLabel="COMCOF No. 1 coffee bag"
        />
        <Text style={styles.featureName}>{no1.name}</Text>
        <Text style={styles.featureTag}>{no1.tagline}</Text>
        <Text style={styles.featureLink}>DISCOVER NO. 1</Text>
      </Pressable>

      <View style={{ paddingHorizontal: 28, marginTop: 72 }}>
        <Label>COMING NEXT</Label>
        {comingNext.map((c) => (
          <View key={c.name} style={styles.nextCard}>
            <Text style={styles.nextName}>{c.name}</Text>
            <Text style={styles.nextNote}>{c.note}</Text>
            <Text style={styles.nextSoon}>COMING SOON</Text>
          </View>
        ))}
      </View>

      <Text style={styles.footer}>© 2026 Comcof Group · Kampala, Uganda</Text>
    </ScrollView>
  );
}

function ProductScreen({ onBack }: { onBack: () => void }) {
  const [weight, setWeight] = useState<string>(weights[0]);
  const [grind, setGrind] = useState<string>(grinds[0]);
  const [quantity, setQuantity] = useState(1);

  const reserve = () => {
    const body = [
      "Reservation: COMCOF No. 1 (via mobile app)",
      "",
      `Size: ${weight}`,
      `Grind: ${grind}`,
      `Quantity: ${quantity}`,
      "",
      "Name:",
      "Phone:",
      "Delivery area:",
      "",
      "Please confirm pricing and delivery date.",
    ].join("\n");
    Linking.openURL(
      `mailto:${SHOP_EMAIL}?subject=${encodeURIComponent("Reserve COMCOF No. 1")}&body=${encodeURIComponent(body)}`
    ).catch(() => {
      /* No mail client available; the address is visible in the note below. */
    });
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ paddingBottom: 64 }}>
      <Pressable onPress={onBack} accessibilityRole="button" style={{ paddingHorizontal: 28, paddingTop: 18 }}>
        <Text style={styles.back}>← COMCOF SHOP</Text>
      </Pressable>

      <View style={{ alignItems: "center", marginTop: 28 }}>
        <Image
          source={require("./assets/no1-bag.png")}
          style={[styles.bag, { width: 260, height: 327 }]}
          resizeMode="contain"
          accessibilityLabel="COMCOF No. 1 coffee bag, front"
        />
      </View>

      <View style={{ paddingHorizontal: 28, marginTop: 36 }}>
        <Text style={styles.productName}>{no1.name}</Text>
        <Text style={styles.productSpec}>{no1.spec.toUpperCase()}</Text>
        <Text style={styles.productDesc}>{no1.description}</Text>

        <View style={{ marginTop: 36 }}>
          <Label>SIZE</Label>
          <View style={styles.pillRow}>
            {weights.map((w) => (
              <Pill key={w} text={w} active={weight === w} onPress={() => setWeight(w)} />
            ))}
          </View>
        </View>

        <View style={{ marginTop: 28 }}>
          <Label>GRIND</Label>
          <View style={styles.pillRow}>
            {grinds.map((g) => (
              <Pill key={g} text={g.toUpperCase()} active={grind === g} onPress={() => setGrind(g)} />
            ))}
          </View>
        </View>

        <View style={{ marginTop: 28 }}>
          <Label>QUANTITY</Label>
          <View style={styles.qtyRow}>
            <Pressable
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
              style={styles.qtyBtn}
              accessibilityRole="button"
              accessibilityLabel="Decrease quantity"
            >
              <Text style={styles.qtyBtnText}>−</Text>
            </Pressable>
            <Text style={styles.qtyValue} accessibilityLiveRegion="polite">
              {quantity}
            </Text>
            <Pressable
              onPress={() => setQuantity(Math.min(24, quantity + 1))}
              style={styles.qtyBtn}
              accessibilityRole="button"
              accessibilityLabel="Increase quantity"
            >
              <Text style={styles.qtyBtnText}>+</Text>
            </Pressable>
          </View>
        </View>

        <Text style={styles.pricingNote}>Pricing announced at release.</Text>

        <Pressable onPress={reserve} style={[styles.btnPrimary, { marginTop: 18 }]} accessibilityRole="button">
          <Text style={styles.btnPrimaryText}>RESERVE NO. 1</Text>
        </Pressable>
        <Text style={styles.reserveNote}>
          Your reservation reaches us at {SHOP_EMAIL} with your selection. We
          confirm pricing and a delivery date before anything is charged.
        </Text>

        <View style={styles.rule} />
        <Label>OUR STORY</Label>
        {no1.story.map((p, i) => (
          <Text key={i} style={styles.story}>
            {p}
          </Text>
        ))}

        <View style={styles.rule} />
        {no1.details.map((d) => (
          <View key={d.label} style={styles.detailRow}>
            <Text style={styles.detailLabel}>{d.label.toUpperCase()}</Text>
            <Text style={styles.detailValue}>{d.value}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [fontsLoaded] = useFonts({
    CormorantGaramond_300Light,
    CormorantGaramond_500Medium,
    DMSans_300Light,
    DMSans_400Regular,
    DMSans_700Bold,
  });

  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      <StatusBar style="light" />
      <View style={styles.nav}>
        <Pressable onPress={() => setScreen("home")} accessibilityRole="button">
          <Wordmark />
        </Pressable>
        <Pressable onPress={() => setScreen("product")} accessibilityRole="button">
          <Text style={styles.navLink}>NO. 1</Text>
        </Pressable>
      </View>
      {fontsLoaded ? (
        screen === "home" ? (
          <HomeScreen onDiscover={() => setScreen("product")} />
        ) : (
          <ProductScreen onBack={() => setScreen("home")} />
        )
      ) : (
        <View style={{ flex: 1, backgroundColor: colors.black }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.black },
  nav: {
    paddingTop: 58,
    paddingBottom: 16,
    paddingHorizontal: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.black,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.line,
  },
  navLink: {
    fontFamily: fonts.sansRegular,
    fontSize: 11,
    letterSpacing: 2.5,
    color: colors.ivory60,
  },
  hero: { paddingHorizontal: 28, paddingTop: 84, paddingBottom: 24 },
  heroTitle: {
    fontFamily: fonts.serif,
    fontSize: 46,
    color: colors.ivory,
    letterSpacing: -0.5,
  },
  heroSub: {
    fontFamily: fonts.sans,
    fontSize: 15,
    lineHeight: 28,
    color: colors.ivory60,
    marginTop: 22,
  },
  btnPrimary: {
    alignSelf: "flex-start",
    backgroundColor: colors.gold,
    paddingVertical: 15,
    paddingHorizontal: 34,
    marginTop: 34,
  },
  btnPrimaryText: {
    fontFamily: fonts.sansBold,
    fontSize: 11,
    letterSpacing: 2.5,
    color: colors.black,
  },
  feature: { alignItems: "center", marginTop: 72, paddingHorizontal: 28 },
  bag: { width: 300, height: 377 },
  featureName: {
    fontFamily: fonts.serif,
    fontSize: 30,
    color: colors.ivory,
    marginTop: 30,
  },
  featureTag: {
    fontFamily: fonts.sans,
    fontSize: 14,
    color: colors.ivory60,
    marginTop: 8,
  },
  featureLink: {
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 3,
    color: colors.gold,
    marginTop: 22,
  },
  label: {
    fontFamily: fonts.sansRegular,
    fontSize: 9.5,
    letterSpacing: 3.5,
    color: colors.ivory40,
    marginBottom: 14,
  },
  nextCard: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.line,
    padding: 22,
    marginBottom: 10,
  },
  nextName: { fontFamily: fonts.serifMedium, fontSize: 18, color: colors.ivory },
  nextNote: {
    fontFamily: fonts.sans,
    fontSize: 12.5,
    lineHeight: 20,
    color: colors.ivory40,
    marginTop: 6,
  },
  nextSoon: {
    fontFamily: fonts.sansRegular,
    fontSize: 8.5,
    letterSpacing: 3,
    color: colors.ivory25,
    marginTop: 16,
  },
  footer: {
    fontFamily: fonts.sans,
    fontSize: 11,
    color: colors.ivory25,
    textAlign: "center",
    marginTop: 72,
  },
  back: {
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 2.5,
    color: colors.ivory40,
  },
  productName: { fontFamily: fonts.serif, fontSize: 36, color: colors.ivory },
  productSpec: {
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 3,
    color: colors.gold,
    marginTop: 12,
  },
  productDesc: {
    fontFamily: fonts.sans,
    fontSize: 14.5,
    lineHeight: 25,
    color: colors.ivory60,
    marginTop: 16,
  },
  pillRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  pill: {
    borderWidth: 1,
    borderColor: colors.line,
    paddingVertical: 11,
    paddingHorizontal: 18,
  },
  pillActive: { borderColor: colors.gold },
  pillText: {
    fontFamily: fonts.sansRegular,
    fontSize: 10.5,
    letterSpacing: 2,
    color: colors.ivory60,
  },
  pillTextActive: { color: colors.gold },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: colors.line,
  },
  qtyBtn: { paddingVertical: 10, paddingHorizontal: 18 },
  qtyBtnText: { fontFamily: fonts.sansRegular, fontSize: 16, color: colors.ivory60 },
  qtyValue: {
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    color: colors.ivory,
    minWidth: 36,
    textAlign: "center",
  },
  pricingNote: {
    fontFamily: fonts.sans,
    fontSize: 12.5,
    color: colors.ivory40,
    marginTop: 30,
  },
  reserveNote: {
    fontFamily: fonts.sans,
    fontSize: 11.5,
    lineHeight: 18,
    color: colors.ivory25,
    marginTop: 14,
  },
  rule: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.line,
    marginVertical: 40,
  },
  story: {
    fontFamily: fonts.serif,
    fontSize: 19,
    lineHeight: 31,
    color: "rgba(247,243,236,0.82)",
    marginBottom: 18,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.line,
  },
  detailLabel: {
    fontFamily: fonts.sansRegular,
    fontSize: 9.5,
    letterSpacing: 2.5,
    color: colors.ivory40,
    paddingTop: 4,
  },
  detailValue: {
    fontFamily: fonts.serifMedium,
    fontSize: 16,
    color: "rgba(247,243,236,0.85)",
    flexShrink: 1,
    textAlign: "right",
  },
});
