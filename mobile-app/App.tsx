import { useState } from "react";
import {
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
import {
  SHOP_EMAIL,
  hero,
  categories,
  releases,
  deliveryRates,
  freeDeliveryOver,
  type Release,
} from "./content";

function Wordmark({ size = 17 }: { size?: number }) {
  return (
    <Text
      style={{
        fontFamily: fonts.sansBold,
        fontSize: size,
        letterSpacing: 2,
        color: colors.ivory,
      }}
      accessibilityRole="header"
    >
      COMC<Text style={{ color: colors.gold }}>O</Text>F
    </Text>
  );
}

function Eyebrow({ children }: { children: string }) {
  return (
    <View style={styles.eyebrowRow}>
      <View style={styles.eyebrowDot} />
      <Text style={styles.eyebrowText}>{children}</Text>
    </View>
  );
}

function mailTo(subject: string) {
  Linking.openURL(
    `mailto:${SHOP_EMAIL}?subject=${encodeURIComponent(subject)}`
  ).catch(() => {
    /* No mail client; the address is shown on screen. */
  });
}

function HomeScreen({ onOpen }: { onOpen: (r: Release) => void }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ paddingBottom: 56 }}>
      {/* Hero */}
      <View style={styles.hero}>
        <Eyebrow>COMCOF SHOP</Eyebrow>
        <Text style={styles.heroTitle}>
          {hero.title}
          {"\n"}
          <Text style={styles.heroTitleEm}>{hero.titleEm}</Text>
        </Text>
        <Text style={styles.heroBody}>{hero.body}</Text>
        <View style={styles.heroBtns}>
          <Pressable
            style={styles.btnPrimary}
            onPress={() => onOpen(releases[0]!)}
            accessibilityRole="button"
          >
            <Text style={styles.btnPrimaryText}>BROWSE COFFEE</Text>
          </Pressable>
          <Pressable
            style={styles.btnGhost}
            onPress={() => mailTo("Corporate coffee enquiry")}
            accessibilityRole="button"
          >
            <Text style={styles.btnGhostText}>CORPORATE ORDERS</Text>
          </Pressable>
        </View>
      </View>

      {/* Shop by */}
      <View style={styles.section}>
        <Eyebrow>SHOP BY</Eyebrow>
        {categories.map((c) => (
          <View key={c.title} style={styles.card}>
            <Text style={styles.cardTitle}>{c.title}</Text>
            <Text style={styles.cardText}>{c.text}</Text>
          </View>
        ))}
      </View>

      {/* Founding releases */}
      <View style={styles.section}>
        <Eyebrow>FOUNDING RELEASES · COMING SOON</Eyebrow>
        <Text style={styles.h2}>
          The First Roast <Text style={styles.h2Em}>Is Coming</Text>
        </Text>
        <Text style={styles.sectionLead}>
          Three founding releases in preparation: our signature Origin Roast,
          Mount Elgon Arabica, and Uganda Robusta Select. Pricing and release
          dates are announced to the launch list first.
        </Text>
        {releases.map((r) => (
          <Pressable
            key={r.slug}
            style={styles.productCard}
            onPress={() => onOpen(r)}
            accessibilityRole="button"
          >
            <View style={styles.photoPlaceholder}>
              <Text style={styles.photoPlaceholderText}>Photography coming</Text>
            </View>
            <View style={{ padding: 18 }}>
              <Text style={styles.productOrigin}>{r.origin.toUpperCase()}</Text>
              <Text style={styles.productName}>{r.name}</Text>
              <Text style={styles.productShort}>{r.short}</Text>
              <View style={styles.chipRow}>
                {r.notes.map((n) => (
                  <Text key={n} style={styles.chip}>
                    {n}
                  </Text>
                ))}
              </View>
            </View>
          </Pressable>
        ))}
        <Pressable
          onPress={() => mailTo("Comcof Shop launch list")}
          accessibilityRole="button"
        >
          <Text style={styles.launchLink}>
            Want to hear about every release?{" "}
            <Text style={{ color: colors.goldLight }}>Join the launch list.</Text>
          </Text>
        </Pressable>
      </View>

      {/* Delivery */}
      <View style={styles.section}>
        <Eyebrow>DELIVERY</Eyebrow>
        {deliveryRates.map((d) => (
          <View key={d.zone} style={styles.deliveryRow}>
            <Text style={styles.deliveryZone}>{d.zone.toUpperCase()}</Text>
            <Text style={styles.deliveryFee}>{d.fee}</Text>
            <Text style={styles.deliveryEta}>{d.estimate}</Text>
          </View>
        ))}
        <Text style={styles.deliveryNote}>
          Planned launch delivery rates for when ordering opens; free delivery
          above {freeDeliveryOver}.
        </Text>
      </View>

      {/* Business band */}
      <View style={styles.band}>
        <Text style={styles.bandTitle}>Buying for a Business?</Text>
        <Text style={styles.bandText}>
          Offices, hotels, restaurants, and events: tell us your monthly
          requirement and we will come back with a supply plan.
        </Text>
        <Pressable
          style={styles.btnPrimary}
          onPress={() => mailTo("Corporate coffee enquiry")}
          accessibilityRole="button"
        >
          <Text style={styles.btnPrimaryText}>START A CORPORATE ENQUIRY</Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>© 2026 Comcof Group · Kampala, Uganda</Text>
    </ScrollView>
  );
}

function ProductScreen({ item, onBack }: { item: Release; onBack: () => void }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ paddingBottom: 56 }}>
      <Pressable onPress={onBack} accessibilityRole="button" style={{ padding: 24 }}>
        <Text style={styles.back}>← COMCOF SHOP</Text>
      </Pressable>

      <View style={{ paddingHorizontal: 24 }}>
        <View style={[styles.photoPlaceholder, { height: 240 }]}>
          <Text style={styles.photoPlaceholderText}>Photography coming</Text>
        </View>

        <Text style={[styles.productOrigin, { marginTop: 26 }]}>
          {item.origin.toUpperCase()}
        </Text>
        <Text style={styles.detailName}>{item.name}</Text>
        <Text style={styles.detailShort}>{item.short}</Text>

        <View style={styles.comingBox}>
          <Text style={styles.comingTitle}>Coming soon</Text>
          <Text style={styles.comingText}>
            This release is in preparation. Join the launch list and you will be
            the first to know when it lands.
          </Text>
          <Pressable
            style={styles.btnPrimary}
            onPress={() => mailTo(`Launch list: ${item.name}`)}
            accessibilityRole="button"
          >
            <Text style={styles.btnPrimaryText}>JOIN THE LAUNCH LIST</Text>
          </Pressable>
        </View>

        <View style={styles.chipRow}>
          {item.notes.map((n) => (
            <Text key={n} style={styles.chip}>
              {n}
            </Text>
          ))}
        </View>

        <View style={{ marginTop: 26 }}>
          {item.details.map((d) => (
            <View key={d.label} style={styles.detailRow}>
              <Text style={styles.detailLabel}>{d.label.toUpperCase()}</Text>
              <Text style={styles.detailValue}>{d.value}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.fullDesc}>{item.full}</Text>
      </View>
    </ScrollView>
  );
}

export default function App() {
  const [open, setOpen] = useState<Release | null>(null);
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
        <Pressable onPress={() => setOpen(null)} accessibilityRole="button">
          <Wordmark />
        </Pressable>
        <Text style={styles.navRight}>COMCOF GROUP</Text>
      </View>
      {fontsLoaded ? (
        open ? (
          <ProductScreen item={open} onBack={() => setOpen(null)} />
        ) : (
          <HomeScreen onOpen={setOpen} />
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
    paddingTop: 54,
    paddingBottom: 14,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.black,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.line,
  },
  navRight: {
    fontFamily: fonts.sansRegular,
    fontSize: 9.5,
    letterSpacing: 2,
    color: colors.ivory40,
  },

  hero: {
    paddingHorizontal: 24,
    paddingTop: 46,
    paddingBottom: 44,
    backgroundColor: colors.espresso,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.line,
  },
  heroTitle: {
    fontFamily: fonts.serif,
    fontSize: 34,
    lineHeight: 42,
    color: colors.ivory,
  },
  heroTitleEm: { color: colors.goldLight },
  heroBody: {
    fontFamily: fonts.sans,
    fontSize: 14,
    lineHeight: 25,
    color: colors.ivory60,
    marginTop: 18,
  },
  heroBtns: { flexDirection: "row", flexWrap: "wrap", gap: 10, marginTop: 28 },

  eyebrowRow: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 14 },
  eyebrowDot: { width: 5, height: 5, borderRadius: 3, backgroundColor: colors.gold },
  eyebrowText: {
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 3,
    color: colors.gold,
  },

  section: { paddingHorizontal: 24, paddingTop: 46 },
  h2: { fontFamily: fonts.serif, fontSize: 26, color: colors.ivory },
  h2Em: { fontStyle: "italic", color: colors.goldLight },
  sectionLead: {
    fontFamily: fonts.sans,
    fontSize: 13.5,
    lineHeight: 24,
    color: colors.ivory60,
    marginTop: 12,
    marginBottom: 20,
  },

  card: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.line,
    backgroundColor: colors.charcoal,
    padding: 20,
    marginBottom: 10,
  },
  cardTitle: { fontFamily: fonts.serifMedium, fontSize: 18, color: colors.ivory },
  cardText: {
    fontFamily: fonts.sans,
    fontSize: 12.5,
    lineHeight: 20,
    color: colors.ivory40,
    marginTop: 6,
  },

  productCard: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.line,
    backgroundColor: colors.charcoal,
    marginBottom: 14,
  },
  photoPlaceholder: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.espresso,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.line,
  },
  photoPlaceholderText: {
    fontFamily: fonts.serif,
    fontStyle: "italic",
    fontSize: 14,
    color: colors.gold,
  },
  productOrigin: {
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 2.5,
    color: colors.gold,
  },
  productName: {
    fontFamily: fonts.serifMedium,
    fontSize: 19,
    color: colors.ivory,
    marginTop: 6,
  },
  productShort: {
    fontFamily: fonts.sans,
    fontSize: 12.5,
    lineHeight: 20,
    color: colors.ivory40,
    marginTop: 8,
  },
  chipRow: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 14 },
  chip: {
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    color: colors.goldLight,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.line,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  launchLink: {
    fontFamily: fonts.sans,
    fontSize: 12.5,
    color: colors.ivory40,
    marginTop: 6,
  },

  deliveryRow: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.line,
    padding: 16,
    marginBottom: 8,
  },
  deliveryZone: {
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 2,
    color: colors.gold,
  },
  deliveryFee: {
    fontFamily: fonts.serifMedium,
    fontSize: 17,
    color: colors.ivory,
    marginTop: 5,
  },
  deliveryEta: {
    fontFamily: fonts.sans,
    fontSize: 11.5,
    color: colors.ivory40,
    marginTop: 2,
  },
  deliveryNote: {
    fontFamily: fonts.sans,
    fontSize: 11.5,
    lineHeight: 18,
    color: colors.ivory40,
    marginTop: 10,
  },

  band: {
    backgroundColor: colors.charcoal,
    paddingHorizontal: 24,
    paddingVertical: 44,
    marginTop: 52,
    alignItems: "center",
  },
  bandTitle: {
    fontFamily: fonts.serif,
    fontSize: 25,
    color: colors.ivory,
    textAlign: "center",
  },
  bandText: {
    fontFamily: fonts.sans,
    fontSize: 13,
    lineHeight: 22,
    color: colors.ivory40,
    textAlign: "center",
    marginTop: 12,
    marginBottom: 24,
  },

  btnPrimary: {
    backgroundColor: colors.gold,
    paddingVertical: 14,
    paddingHorizontal: 26,
    alignSelf: "flex-start",
  },
  btnPrimaryText: {
    fontFamily: fonts.sansBold,
    fontSize: 10,
    letterSpacing: 2.2,
    color: colors.black,
  },
  btnGhost: {
    borderWidth: 1,
    borderColor: "rgba(247,243,236,0.3)",
    paddingVertical: 14,
    paddingHorizontal: 26,
  },
  btnGhostText: {
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 2.2,
    color: colors.ivory,
  },

  back: {
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    letterSpacing: 2.5,
    color: colors.ivory40,
  },
  detailName: {
    fontFamily: fonts.serif,
    fontSize: 30,
    color: colors.ivory,
    marginTop: 8,
  },
  detailShort: {
    fontFamily: fonts.sans,
    fontSize: 14,
    lineHeight: 24,
    color: colors.ivory60,
    marginTop: 12,
  },
  comingBox: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.line,
    backgroundColor: colors.charcoal,
    padding: 22,
    marginTop: 24,
  },
  comingTitle: { fontFamily: fonts.serifMedium, fontSize: 18, color: colors.ivory },
  comingText: {
    fontFamily: fonts.sans,
    fontSize: 12.5,
    lineHeight: 21,
    color: colors.ivory40,
    marginTop: 8,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 14,
    paddingVertical: 13,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.line,
  },
  detailLabel: {
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 2.2,
    color: colors.ivory40,
    paddingTop: 3,
  },
  detailValue: {
    fontFamily: fonts.sans,
    fontSize: 13,
    color: colors.ivory,
    flexShrink: 1,
    textAlign: "right",
  },
  fullDesc: {
    fontFamily: fonts.sans,
    fontSize: 13,
    lineHeight: 24,
    color: colors.ivory60,
    marginTop: 24,
  },
  footer: {
    fontFamily: fonts.sans,
    fontSize: 11,
    color: colors.ivory25,
    textAlign: "center",
    marginTop: 44,
  },
});
